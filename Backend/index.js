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
const contractAddress = '0x123456789...'; // Endereço do contrato na blockchain
const abi = []; // ABI do contrato
const contract = new ethers.Contract(contractAddress, abi, provider);

app.get('/payments/:companyAddress', async (req, res) => {
  const { companyAddress } = req.params;

  try {
    const paymentCount = await contract.paymentCount(companyAddress); // Obter o número total de pagamentos
    const payments = [];

    for (let i = 0; i < paymentCount; i++) {
      const payment = await contract.payments(companyAddress, i); // Obter os detalhes de cada pagamento
      payments.push(payment);
    }

    res.json({ payments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os pagamentos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
