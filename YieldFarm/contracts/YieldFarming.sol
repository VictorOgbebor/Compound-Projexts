pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@studydefi/money-legos/dydx/contracts/DydxFlashloanBase.sol";
import "@studydefi/money-legos/dydx/contracts/ICallee.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import './CompoundV.sol';

contract YieldFarming is ICallee, DydxFlashloanBase, CompoundV {
    enum Direction { Deposit, Withdraw }
    struct Operation {
        address token;
        address vToken;
        Direction direction;
        uint amountProvided;
        uint amountBorrowed;
    }
    address public owner;

    constructor(address _vComptroller) CompoundV(_vComptroller) public {
        owner = msg.sender;
    }

    function openPosition(address _solo, address _token, address _vToken, uint _amountProvided, uint _amountBorrowed) external {
        require(msg.sender == owner, 'only owner');
        IERC20(_token).transferFrom(msg.sender, address(this), _amountProvided);
        // 2 wei is used to pay for flashloan
        _initiateFlashloan(_solo, _token, _vToken, Direction.Deposit, _amountProvided - 2, _amountBorrowed);
    }

    function closePosition(address _solo, address _token, address _vToken) external {
        require(msg.sender == owner, 'only owner');
        IERC20(_token).transferFrom(msg.sender, address(this), 2); // 2 wei is used to pay for flashloan
        claimCompV();
        uint borrowBalance = getBorrowBalance(_vToken);
        _initiateFlashloan(_solo, _token, _vToken, Direction.Withdraw, 0, borrowBalance);

        // vComp
        address vCompAddress = getVCompAddress();
        IERC20 vComp = IERC20(vCompAddress);
        uint vCompBalance = vComp.balanceOf(address(this));
        vComp.transfer(msg.sender, vCompBalance);

        // token
        IERC20 token = IERC20(_token);
        uint tokenBalance = token.balanceOf(address(this));
        token.transfer(msg.sender, tokenBalance);
    }

    function callFunction(address sender, Account.Info memory account, bytes memory data) public {
        Operation memory operation = abi.decode(data, (Operation));

        if(operation.direction == Direction.Deposit) {
            supply(operation.vToken, operation.amountProvided + operation.amountBorrowed);
            enterMarket(operation.vToken);
            borrow(operation.vToken, operation.amountBorrowed);
        } else {
            repayBorrow(operation.vToken, operation.amountBorrowed);
            uint vTokenBalance = getVTokenBalance(operation.vToken);
            redeem(operation.vToken, vTokenBalance);
        } 
    }
    function _initiateFlashloan(
        address _solo, 
        address _token, 
        address _vToken, 
        Direction _direction,
        uint _amountProvided, 
        uint _amountBorrowed
    )
        internal
    {
        ISoloMargin solo = ISoloMargin(_solo);

        // Get marketId from token address
        uint256 marketId = _getMarketIdFromTokenAddress(_solo, _token);

        // Calculate repay amount (_amount + (2 wei))
        // Approve transfer from
        uint256 repayAmount = _getRepaymentAmountInternal(_amountBorrowed);
        IERC20(_token).approve(_solo, repayAmount);

        // 1. Withdraw $
        // 2. Call callFunction(...)
        // 3. Deposit back $
        Actions.ActionArgs[] memory operations = new Actions.ActionArgs[](3);

        operations[0] = _getWithdrawAction(marketId, _amountBorrowed);
        operations[1] = _getCallAction(
            // Encode MyCustomData for callFunction
            abi.encode(Operation({
            token: _token, 
            vToken: _vToken, 
            direction: _direction,
            amountProvided: _amountProvided, 
            amountBorrowed: _amountBorrowed
            }))
        );
        operations[2] = _getDepositAction(marketId, repayAmount);

        Account.Info[] memory accountInfos = new Account.Info[](1);
        accountInfos[0] = _getAccountInfo();

        solo.operate(accountInfos, operations);
    }
}
