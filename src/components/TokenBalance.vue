<template>
    <div>
      <h3>Token Balance: {{ balance }}</h3>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['web3', 'account', 'tokenAddress', 'tokenABI']),
      balance() {
        return this.$store.state.balance;
      },
    },
    methods: {
      async getBalance() {
        if (this.web3 && this.account) {
          const tokenContract = new this.web3.eth.Contract(this.tokenABI, this.tokenAddress);
          const balance = await tokenContract.methods.balanceOf(this.account).call();
          this.$store.commit('setBalance', this.web3.utils.fromWei(balance, 'ether'));
        }
      },
    },
    watch: {
      account: 'getBalance',
    },
    mounted() {
      this.getBalance();
    },
  };
  </script>
  
  <style scoped>
  h3 {
    color: #42b983;
  }
  </style>
  