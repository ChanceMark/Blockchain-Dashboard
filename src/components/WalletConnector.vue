<template>
    <div>
      <button @click="connectWallet">Connect Wallet</button>
    </div>
  </template>
  
  <script>
  import Web3 from 'web3';
  import { mapActions } from 'vuex';
  
  export default {
    methods: {
      ...mapActions(['setWeb3', 'setAccount']),
      async connectWallet() {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            this.setAccount(accounts[0]);
            this.setWeb3(web3);
          } catch (error) {
            console.error("User denied account access");
          }
        } else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #358a6a;
  }
  </style>
  