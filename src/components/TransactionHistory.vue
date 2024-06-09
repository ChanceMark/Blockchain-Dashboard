<template>
    <div>
      <h3>Transaction History</h3>
      <ul>
        <li v-for="tx in transactions" :key="tx.hash">
          {{ tx.hash }} - {{ tx.value }} ETH
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['web3', 'account', 'transactions']),
    },
    methods: {
      async fetchTransactions() {
        if (this.web3 && this.account) {
          const blockNumber = await this.web3.eth.getBlockNumber();
          const txs = [];
          for (let i = blockNumber; i >= blockNumber - 10; i--) {
            const block = await this.web3.eth.getBlock(i, true);
            block.transactions.forEach(tx => {
              if (tx.from === this.account || tx.to === this.account) {
                txs.push(tx);
              }
            });
          }
          this.$store.commit('setTransactions', txs);
        }
      },
    },
    watch: {
      account: 'fetchTransactions',
    },
    mounted() {
      this.fetchTransactions();
    },
  };
  </script>
  
  <style scoped>
  h3 {
    color: #42b983;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: #f5f5f5;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  