import React, { useState } from 'react';
import { ethers } from 'ethers';
import EscrowABI from './contracts/EscrowABI.js';
import ContractFactoryABI from './contracts/ContractFactoryABI.js';
import { FormContainer } from '../styles/components/ContractButtonStyled.js';
import { ContractFactory } from 'ethers';

const ContractButton = () => {
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [quantity, setQuantity] = useState('');
  const [releaseTime, setReleaseTime] = useState('');

  const handleButtonClick = async () => {
    try {
      // Create an instance of the Ethereum provider
      const provider = new ethers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com");

      // Get the signer for the current Ethereum account
      const signer = provider.getSigner();

      // Create an instance of the contract factory
      const contractFactoryAddress = '0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47';
      const contractFactory = new ethers.Contract(contractFactoryAddress, ContractFactoryABI, signer);

      // Create an instance of the escrow contract
      const escrowAddress = await contractFactory.createTransaction(buyer, seller, quantity, releaseTime);
      const escrowContract = new ethers.Contract(escrowAddress, EscrowABI, signer);

      const deployedContract = await contractFactory.deploy(buyer, seller, quantity, releaseTime);
      await deployedContract.deployed();

      console.log('Escrow contract generated successfully!');
    } catch (error) {
      console.error('An error occurred while generating the escrow contract:', error);
    }
  };

  return (
    <FormContainer>
      <h1>Gerador de Smart Contract</h1>
      <input
        type="text"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
        placeholder="Empresa"
      />
      <input
        type="text"
        value={seller}
        onChange={(e) => setSeller(e.target.value)}
        placeholder="Valor do Empréstimo"
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Juros Mensal %"
      />
      <input
        type="text"
        value={releaseTime}
        onChange={(e) => setReleaseTime(e.target.value)}
        placeholder="% de Faturamento"
      />
      <button onClick={handleButtonClick}>Generate Escrow Contract</button>
    </FormContainer>
  );
};

export default ContractButton;
