pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract VToken is ERC20 {
  constructor() ERC20('Victor Token', 'VTK') {}
}