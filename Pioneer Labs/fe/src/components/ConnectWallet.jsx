import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectWallet = () => {
  const [connectedAccount, setConnectedAccount] = useState(null);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting MetaMask:', error);
      }
    } else {
      alert('MetaMask extension not detected. Please install MetaMask.');
    }
  };

  return (
    <div>
      <h2>Connect Wallet</h2>
      {connectedAccount ? (
        <p>Connected Account: {connectedAccount}</p>
      ) : (
        <button onClick={connectMetaMask}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
