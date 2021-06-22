pragma solidity 0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './VTokenInterface.sol';
import './VComptrollerInterface.sol';
import './PriceOracleInterface.sol';

contract CompoundV {
    ComptrollerInterface public comptroller;
    PriceOracleInterface public priceOracle;

    constructor(
        address _comptroller,
        address _priceOracle
    ) {
        comptroller = VComptrollerInterface(_comptroller);
        priceOracle = PriceOracleInterface(_priceOracle);
    }

// Lending
    function supply(address vTokenAddress, uint underlyingAmount) external {
        VTokenInterface vToken = VTokenInterface(vTokenAddress);
        address underlyingAddress = vToken.underlying();
        IERC20(underlyingAddress).approve(vTokenAddress, underlyingAmount);
        uint result = vToken.mint(underlyingAmount);
        require(result == 0, 'vToken#mint() failed. see Compound ErrorReporter.sol for more details');
    }
}


function redeem(address vTokenAddress, uint vTokenAmount) external {
    VTokenInterface vToken = VTokenInterface(vTokenAddress);
    uint result = vToken.redeemUnderlying(vTokenAmount);
    require(result == 0, 'vToken#redeem() failed. see Compound ErrorReporter.sol for more details');
    }
}

// Borrowing
function enterMarket(address vTokenAddress) external {
    address[] memory markets = new address[](1);
    markets[0] = vTokenAddress;
    uint[] memory results = comptroller.enterMarkets(markets);
    require(result == 0, 'vToken#enterMarket() failed. see Compound ErrorReporter.sol for more details');
    }
}

function borrow(address vTokenAddress, uint borrowAmount) external {
    VTokenInterface vToken = VTokenInterface(vTokenAddress);
    address underlyingAddress = vToken.underlying(); 
    uint result = vToken.borrow(borrowAmount);
    require(
      result == 0, 
      'vToken#borrow() failed. see Compound ErrorReporter.sol for details'
    ); 
  }

function repayBorrow(address vTokenAddress, uint underlyingAmount) external {
    VTokenInterface cToken = VTokenInterface(vTokenAddress);
    address underlyingAddress = vToken.underlying(); 
    IERC20(underlyingAddress).approve(cTokenAddress, underlyingAmount);
    uint result = vToken.repayBorrow(underlyingAmount);
    require(
      result == 0, 
      'vToken#borrow() failed. see Compound ErrorReporter.sol for details'
    ); 
  }

function getMaxBorrow(address vTokenAddress) external view returns(uint) {
    (uint result, uint liquidity, uint shortfall) = comptroller
      .getAccountLiquidity(address(this));
    require(
      result == 0, 
      'comptroller#getAccountLiquidity() failed. see Compound ErrorReporter.sol for details'
    ); 
    require(shortfall == 0, 'account underwater');
    require(liquidity > 0, 'account does not have collateral');
    uint underlyingPrice = priceOracle.getUnderlyingPrice(vTokenAddress);
    return liquidity / underlyingPrice;
  }

}