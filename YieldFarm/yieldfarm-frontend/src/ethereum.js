import { ethers, Contract } from 'ethers';
import YieldFarming from './contracts/YieldFarming.json';
import addresses from './addresses.js';

const getBlockchain = () =>
    new  Promise((resolve, reject) => 
    window.addEventListener('load', async () => {
        if(window.ethereum) {
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();

            const YieldFarming = new Contract(
                YieldFarming.networks[window.ethereum.networkVersion].address,
                YieldFarming.abi,
                signer
            );

            const dai = new Contract(
                addresses.dai,
                ['function approve(address spender, uint amount) external'],
                signer
            );
            resolve({signerAddress, YieldFarming, dai});
        }
        resolve({signerAddress: undefined, YieldFarming: undefined});
    })
    );

    export default getBlockchain;