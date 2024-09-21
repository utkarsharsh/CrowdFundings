import { ethers } from "ethers";
import abi from '../../abi/CrowdFunding.json';
import { toast } from 'react-hot-toast'; // Import toast

// Replace with your contract's address and ABI
const markVote = async (campaignId,account) => {
    const { ethereum } = window;
    const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    
    if (!ethereum) {
        toast.error("Please install MetaMask."); // Show error toast
        return;
    }

    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer=new ethers.JsonRpcSigner(provider,account)
    const contract = new ethers.Contract(address, abi.abi, signer);

    try {
        // Call the markvote function
        const tx = await contract.markvote(campaignId);
        toast.success("Vote successfully cast!"); // Show success toast before waiting
        const receipt = await tx.wait(); // Wait for transaction confirmation

        // You can check the event logs or receipt to see if it was successful
        const result = {
            result: true,
            message: "Vote successfully cast!",
            account: receipt.from // This is usually the address of the signer
        };
        return result;

    } catch (error) {
        console.error("Error casting vote:", error);
        toast.error("Voting failed."); // Show error toast on failure
        return {
            result: false,
            message: "Voting failed.",
            account: null
        };
    }
};

export default markVote;
