import { ethers } from 'ethers';
import toast from 'react-hot-toast';

const connectWallet = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    toast.error("Install MetaMask first."); // Toast notification for MetaMask not installed
    return {
      result: false,
      message: "Install MetaMask first",
      account: null
    };
  }

  try {
    // Request account access
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    toast.success("Connected to MetaMask!"); // Toast notification for successful connection
    return {
      result: true,
      message: "Connected to MetaMask",
      account: accounts[0]
    }; // Return the first connected account
  } catch (error) {
    console.error("Error connecting wallet:", error);
    toast.error("An error occurred. Please try again."); // Toast notification for error
    return {
      result: false,
      message: "Something went wrong",
      account: null
    }; // Return null if there was an error
  }
};

export default connectWallet;
