const CompoundV = artifacts.require('CompoundV.sol');

const vBatAddress = '0xebf1a11532b93a529b5bc942b4baa98647913002';

module.exports = async done => {
  const CompoundV = await CompoundV.deployed();
  await CompoundV.repayBorrow(vBatAddress, web3.utils.toWei('5'));
  done();
}