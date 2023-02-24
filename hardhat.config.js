require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: { chainId: 1337 },
    localhost: { chainId: 1337 },
    goerli: { 
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`]
     },
  }
};
