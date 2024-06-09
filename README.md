# Blockchain Dashboard

A web-based dashboard for monitoring and visualizing blockchain transactions and data. This project is built using Vue.js and integrates with Ethereum using web3.js.

## Prerequisites

- Node.js
- npm or yarn
- MetaMask or any other web3 wallet

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/ChanceMark/blockchain-dashboard.git
    cd blockchain-dashboard
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    ```sh
    cp .env.example .env
    ```

4. Update `.env` with your Infura project ID and the smart contract address.

5. Run the development server:
    ```sh
    npm run serve
    ```

6. Open your browser and navigate to `http://localhost:8080`.

## Project Structure

- `public/` - Static files.
- `src/` - Source files.
    - `assets/` - Images and other asset files.
    - `components/` - Vue components.
    - `contracts/` - Smart contract ABI files.
    - `store/` - Vuex store.
    - `App.vue` - Root component.
    - `main.js` - Entry point.

## Components

- `WalletConnector.vue` - Connects to the user's Ethereum wallet.
- `TokenBalance.vue` - Displays the user's token balance.
- `TransactionHistory.vue` - Displays the user's transaction history.
- `AccountInfo.vue` - Displays the user's account information.
- `Dashboard.vue` - Combines all the components into a dashboard.

## License

This project is licensed under the MIT License.
