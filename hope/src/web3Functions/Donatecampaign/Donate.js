import { ethers } from "ethers";
import abi from '../../abi/CrowdFunding.json'
const donateToCampaign = async (campaignId, amount,address) => {
    const { ethereum } = window;
  
    if (!ethereum) {
      alert("Please install MetaMask.");
      return;
    }
  
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = provider.getSigner();
  
    const contract = new ethers.Contract(address, abi.abi, signer);
  
    try {
      const tx = await contract.donateToCampaign(campaignId, {
        value: ethers.utils.parseEther(amount) // Convert amount to Wei
      });
      const receipt = await tx.wait(); // Wait for transaction confirmation
  
      // You can check the event logs or receipt to see if it was successful
      const result = {
        result: true,
        message: "Donation successful!",
        account: receipt.from // This is usually the address of the signer
      };
      return result;
  
    } catch (error) {
      console.error("Error donating to campaign:", error);
      return {
        result: false,
        message: "Donation failed.",
        account: null
      };
    }
  };
  export default donateToCampaign