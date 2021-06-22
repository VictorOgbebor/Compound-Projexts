pragma solidity ^0.5.7;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './VTokenInterface.sol';
import './VComptrollerInterface.sol';

contract CompoundV {
    VComptrollerInterface public vComptroller;

    constructor(
        address _vComptroller
    ) public {
        vComptroller = VComptrollerInterface(_vComptroller);
    }

    function supply(address vTokenAddress, uint underlyingAmount) internal {
        VTokenInterface vToken = VTokenInterface(vTokenAddress);
        address underlyingAddress = vToken.underlying();
        IERC20(underlyingAddress).approve(vTokenAddress, underlyingAmount);
        uint result = vToken.mint(underlyingAmount);
        require(
            result == 0, 
             'vToken#mint() failed. see Compound ErrorReporter.sol for details');
    }

    function redeem(address vTokenAddress, uint vTokenAmount) internal {
        VTokenInterface vToken = VTokenInterface(vTokenAddress);
        uint result = vToken.redeem(vTokenAmount);
        require(
            result == 0, 
             'vToken#redeem() failed. see Compound ErrorReporter.sol for details');        
    }

    function enterMarket(address vTokenAddress) internal {
        address[] memory markets = new address[](1);
        markets[0] = vTokenAddress;
        uint[] memory results = vComptroller.enterMarkets(markets);
        require(
            results[0] == 0, 
             'vToken#enterMarket() failed. see Compound ErrorReporter.sol for details');
    }

    function borrow(address vTokenAddress, uint borrowAmount) internal {
        VTokenInterface vToken = VTokenInterface(vTokenAddress);
        uint result = vToken.borrow(borrowAmount);
        require(
            result == 0, 
             'vToken#borrow() failed. see Compound ErrorReporter.sol for details');
    }

    function repayBorrow(address vTokenAddress, uint underlyingAmount) internal {
        VTokenInterface vToken = VTokenInterface(vTokenAddress);
        address underlyingAddress = vToken.underlying();
        IERC20(underlyingAddress).approve(vTokenAddress, underlyingAmount);
        uint result = vToken.repayBorrow(underlyingAmount);
        require(
            result == 0, 
             'vToken#Borrow() failed. see Compound ErrorReporter.sol for details');
    }

    function claimCompV() internal {
        vComptroller.claimCompV(address(this));
    }

    function getVCompAddress() internal view returns(address) {
        return vComptroller.getVCompAddress();
    }

    function getVTokenBalance(address vTokenAddress) public view returns(uint){
        return VTokenInterface(vTokenAddress).balanceOf(address(this));
    }

  //No view keyword because borrowBalanceCurrent() can be called in a tx, and Solidity complains if view
    function getBorrowBalance(address vTokenAddress) public returns(uint){
        return VTokenInterface(vTokenAddress).borrowBalanceCurrent(address(this));
    }
}