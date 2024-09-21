import { ethers } from "ethers";
import abi from '../../abi/CrowdFunding.json';
import { toast } from 'react-hot-toast'; // Import toast

const donateToCampaign = async (campaignId, amount,account) => {
    const { ethereum } = window;

    if (!ethereum) {
        toast.error("Please install MetaMask."); // Show error toast
        return;
    }
   
    const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    // const signer = provider.getSigner();
    const signer=new ethers.JsonRpcSigner(provider,account)
    const contract = new ethers.Contract(address, abi.abi, signer);

    try {
        // Show a toast indicating that the donation is being processed
       const t= toast.loading("Processing your donation...");

        const tx = await contract.donateToCampaign(campaignId, {
            value: ethers.parseEther("1")// Convert amount to Wei
        });

        const receipt = await tx.wait(); // Wait for transaction confirmation
        toast.success("Donation successful!"); // Show success toast
       
        // You can check the event logs or receipt to see if it was successful
        const result = {
            result: true,
            message: "Donation successful!",
            account: receipt.from // This is usually the address of the signer
        };
        toast.dismiss(t);
        return result;

    } catch (error) {
        console.error("Error donating to campaign:", error);
        toast.error("Donation failed."); // Show error toast
        return {
            result: false,
            message: "Donation failed.",
            account: null
        };
    }
};

export default donateToCampaign;
