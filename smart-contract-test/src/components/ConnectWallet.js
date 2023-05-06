import React from 'react';
import Web3 from 'web3';

export default function WalletButton() {
  function handleConnectWallet() {
    async function connectWallet() {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          
          const button = document.getElementById('MetamaskButton');
          button.addEventListener('click', async () => {
            try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              const account = accounts[0];
              console.log(account);
              // Code to interact with the wallet using the account address goes here
            } catch (error) {
              console.error(error);
            }
          });

        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('Please install MetaMask');
      }
    }

    connectWallet();
  }

  return (
    <div>
        <button id="MetamaskButton" onClick={handleConnectWallet}>Connect to MetaMask</button>
    </div>
  );
}
