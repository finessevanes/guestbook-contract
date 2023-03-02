require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { POKT_API_KEY_GOERLI, GOERLI_PRIVATE_KEY, ALCHEMY_API_KEY_SEPOLIA } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: { chainId: 1337 },
    localhost: { chainId: 1337 },
    goerli: {
      url: `https://eth-goerli.gateway.pokt.network/v1/${POKT_API_KEY_GOERLI}`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY_SEPOLIA}`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
  },
};
