async function main() {
  // Address of the whitelist contract that you deploy in the previous module
  //const whitelistContract = "0x67c7eC7efCeD3E3a758cBE15CAfEA596F5c34Cf3"; // rinkeby contract

  // following contract re-deployed on the goerli network again as rinkeby will be depreciated.
  const whitelistContract = "0x3ae7EC9af21e65BDD160Dc496C483b40A0E8aBC9";

  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = "https://nft-collection-sneh1999.vercel.app/api/";

  module.exports = { whitelistContract, metadataURL };

  /**
   * A ContractFactory in ehters.js is an abstraction used to deploy new smart contracts,
   * so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
   */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// call the main function and catch if there is any error
main().then((error) => {
  console.error(error);
  process.exit(1);
});
