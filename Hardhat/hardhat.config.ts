import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { PRIVATE_KEY} = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    celo: {
      url: "https://forno.celo-sepolia.celo-testnet.org",
      accounts: [`0x${PRIVATE_KEY}`],
    },
   
  },
};

export default config;
