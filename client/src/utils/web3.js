import Web3 from 'web3';

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async () => {
      console.log('Loaded');
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          // await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else if (process.env.REACT_APP_INFURA_TOKEN) {
        const provider = new Web3.providers.HttpProvider(
          `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_TOKEN}`,
        );
        const web3 = new Web3(provider);
        console.log('No web3 instance injected, using Infura/Local web3.');
        resolve(web3.currentProvider);
      }
      reject('No web3');
    });
  });

const getSigner = web3 => {
  const provider = web3.currentProvider;
  return provider.getSigner();
};

export { getWeb3, getSigner };