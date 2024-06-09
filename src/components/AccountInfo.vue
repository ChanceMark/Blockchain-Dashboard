<template>
    <div>
      <h3>Account Info</h3>
      <p><strong>Address:</strong> {{ account }}</p>
      <p><strong>Balance:</strong> {{ etherBalance }} ETH</p>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['web3', 'account']),
      etherBalance() {
        return this.$store.state.etherBalance;
      },
    },
    methods: {
      async fetchAccountInfo() {
        if (this.web3 && this.account) {
          const balance = await this.web3.eth.getBalance(this.account);
          this.$store.commit('setEtherBalance', this.web3.utils.fromWei(balance, 'ether'));
        }
      },
    },
    watch: {
      account: 'fetchAccountInfo',
    },
    mounted() {
      this.fetchAccountInfo();
    },
  };
  </script>
  
  <style scoped>
  h3 {
    color: #42b983;
  }
  p {
    margin: 0;
    padding: 5px 0;
  }
  </style>
  