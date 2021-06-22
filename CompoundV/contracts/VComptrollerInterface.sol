pragma solidity ^0.8.0;

interface VComptrollerInterface {
  function enterMarkets(address[] calldata vTokens) external returns (uint[] memory);
  function getAccountLiquidity(address owner) external view returns(uint, uint, uint);
}
