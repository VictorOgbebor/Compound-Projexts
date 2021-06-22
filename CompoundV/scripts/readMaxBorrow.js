const CompoundV = artifacts.require('CompoundV.sol');
const Token = artifacts.require('Token.sol');

const vBatAddress = '0xebf1a11532b93a529b5bc942b4baa98647913002'; 

module.exports = async done => {
  const CompoundV = await CompoundV.deployed();
  const maxBorrow = await CompoundV.readMaxBorrow(vBatAddress);
  console.log(`Max Bat Balance: ${web3.utils.fromWei(maxBorrow)}`);
  done();
}