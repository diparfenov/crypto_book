require("@nomicfoundation/hardhat-toolbox");
require('solidity-coverage'); 
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/e6a855890fa54fe484ca1381f27deb99", //Infura url with projectId
      accounts: ["47df9413d22ce00fec5cd9b27ce7efe940d1e8ba86ec79975b17a84fd708ba1e"] // add the account that will deploy the contract (private key)
     },
   }
};
