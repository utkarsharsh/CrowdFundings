import { ethers } from 'ethers';

const connectWallet = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    alert("Please install MetaMask.");
    return {
        result:false,
        message:"Install the metamask first",
        account:null
    }; // Return null if MetaMask is not installed
  }

  try {
    // Request account access
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    return   {
        result:true,
        message:"Connected to metamask",
        account:accounts[0]
    }; // Return the first connected account
  } catch (error) {
    console.error("Error connecting wallet:", error);
    alert("An error occurred. Please try again.");
    return   {
        result:false,
        message:"Something went wrong ",
        account:null
    };// Return null if there was an error
  }
};

export default connectWallet