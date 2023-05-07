import React from 'react';
import ContractButton from './components/ContractButton';
import WalletButton from './components/ConnectWallet';
import AppTable from './components/AppTable'

function App() {
  return (
    <div>
      <h1>Gerador de Smart Contract</h1>
      <ContractButton />
      <WalletButton />
      <AppTable />;
    </div>
  );
}

export default App;
