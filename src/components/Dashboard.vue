<template>
  <div>
    <img src="@/assets/logo.png" alt="Logo" class="logo"/>
    <WalletConnector @wallet-connected="onWalletConnected" />
    <AccountInfo v-if="account"/>
    <TokenBalance v-if="web3 && account" />
    <TransactionHistory v-if="web3 && account" />
  </div>
</template>

<script>
import WalletConnector from './WalletConnector.vue';
import TokenBalance from './TokenBalance.vue';
import TransactionHistory from './TransactionHistory.vue';
import AccountInfo from './AccountInfo.vue';

export default {
  data() {
    return {
      account: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          this.account = accounts[0];
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
h1 {
  color: #42b983;
}
</style>
