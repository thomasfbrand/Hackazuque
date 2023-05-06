const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
const port = 3000;

// Configuração da conexão com a rede Ethereum usando Infura
const provider = new ethers.providers.InfuraProvider('mainnet', {
  projectId: process.env.INFURA_PROJECT_ID,
});

// Criação de uma instância do contrato
const contractAddress = 'tyyrtiuwht84'; // Endereço do contrato na blockchain
const abi = []; // Abi do contrato
const contract = new ethers.Contract(contractAddress, abi, provider);

app.get('/balance/:address', async (req, res) => {
  const { address } = req.params;

  try {
    const balance = await provider.getBalance(address);
    res.json({ balance: balance.toString() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter saldo' });
  }
});

app.get('/contract/name', async (req, res) => {
  try {
    const name = await contract.name();
    res.json({ name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o nome do contrato' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// DÚVIDAS: perguntar se realmente é mainnet a rede ethereum que será usada