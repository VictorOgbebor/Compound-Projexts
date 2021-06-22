pragma solidity ^0.5.7;

interface VComptrollerInterface {
  function enterMarkets(address[] calldata cTokens) external returns (uint[] memory);
  function claimCompV(address holder) external;
  function getVCompAddress() external view returns(address);
}