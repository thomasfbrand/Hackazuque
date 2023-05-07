import React from 'react';
import ContractButton from './components/ContractButton';
import WalletButton from './components/ConnectWallet';
import AppTable from './components/AppTable'
import { Container } from './styles/components/Container';

function App() {
  return (
    <Container>
      <ContractButton />
      <WalletButton />
      <AppTable />
    </Container>
  );
}

export default App;
