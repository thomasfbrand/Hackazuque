import React, { useState } from 'react';
import { ethers } from 'ethers';
import ContractFactoryABI from './contracts/ContractFactoryABI';
import EscrowABI from './contracts/EscrowABI';

const ContractButton = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [quantity, setQuantity] = useState('');
  const [releaseTime, setReleaseTime] = useState('');

  const handleButtonClick = async () => {
    try {
      // Create an instance of the Ethereum provider
      const provider = new ethers.JsonRpcProvider("https://mumbai.polygonscan.com/");

      // Get the signer for the current Ethereum account
      const signer = provider.getSigner();

      // Create an instance of the contract factory
      const contractFactoryAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
      const contractFactory = new ethers.Contract(contractFactoryAddress, ContractFactoryABI, signer);

      // Create an instance of the escrow contract
      const escrowAddress = await contractFactory.createTransaction(tokenAddress, buyer, seller, quantity, releaseTime);
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
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        placeholder="Token Address"
      />
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
