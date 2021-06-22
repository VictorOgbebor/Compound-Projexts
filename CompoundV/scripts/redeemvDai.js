const CompoundV = artifacts.require('CompoundV.sol');

const vDaiAddress = '0x6d7f0754ffeb405d23c51ce938289d4835be3b14';

module.exports = async done => {
  const CompoundV = await CompoundV.deployed();
  await CompoundV.redeem(vDaiAddress, 100 * Math.pow(10, 8)); //vToken have 8 decimals
  done();
}