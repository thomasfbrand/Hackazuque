import React, { useState } from 'react';
import { ethers } from 'ethers';
//import ContractFactoryABI from './contracts/ContractFactory.sol';
import EscrowABI from './contracts/EscrowABI.js';
import ContractFactoryABI from './contracts/ContractFactoryABI.js';

const ContractButton = () => {
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [quantity, setQuantity] = useState('');
  const [releaseTime, setReleaseTime] = useState('');

  const handleButtonClick = async () => {
    try {
      // Create an instance of the Ethereum provider
      const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/30166d4e470249e29dfeb5c93a86d3df');

      // Get the signer for the current Ethereum account
      const signer = provider.getSigner();

      // Create an instance of the contract factory
      const contractFactoryAddress = '0xYourContractFactoryAddress';
      const contractFactory = new ethers.Contract(contractFactoryAddress, ContractFactoryABI, signer);

      // Create an instance of the escrow contract
      const escrowAddress = await contractFactory.createTransaction(buyer, seller, quantity, releaseTime);
      const escrowContract = new ethers.Contract(escrowAddress, EscrowABI, signer);

      console.log('Escrow contract generated successfully!');
    } catch (error) {
      console.error('An error occurred while generating the escrow contract:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
        placeholder="Buyer Address"
      />
      <input
        type="text"
        value={seller}
        onChange={(e) => setSeller(e.target.value)}
        placeholder="Seller Address"
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <input
        type="text"
        value={releaseTime}
        onChange={(e) => setReleaseTime(e.target.value)}
        placeholder="Release Time"
      />
      <button onClick={handleButtonClick}>Generate Escrow Contract</button>
    </div>
  );
};

export default ContractButton;
