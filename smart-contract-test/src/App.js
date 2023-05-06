import React from 'react';
import ContractButton from './components/ContractButton';
import WalletButton from './components/ConnectWallet';

function App() {
  return (
    <div>
      <h1>Gerador de Smart Contract</h1>
      <ContractButton />
      <WalletButton />
    </div>
  );
}

export default App;
