import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    web3: null,
    account: null,
    tokenAddress: process.env.VUE_APP_CONTRACT_ADDRESS,
    tokenABI: require('../contracts/MyToken.json').abi,
    balance: 0,
    etherBalance: 0,
    transactions: [],
  },
  mutations: {
    setWeb3(state, web3) {
      state.web3 = web3;
    },
    setAccount(state, account) {
      state.account = account;
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
    setEtherBalance(state, etherBalance) {
      state.etherBalance = etherBalance;
    },
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
  },
  actions: {
    setWeb3({ commit }, web3) {
      commit('setWeb3', web3);
    },
    setAccount({ commit }, account) {
      commit('setAccount', account);
    },
  },
});
