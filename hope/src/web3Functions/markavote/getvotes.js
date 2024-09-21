import { ethers } from "ethers";
import abi from '../../abi/CrowdFunding.json'; // Import your contract ABI

// Function to mark a vote
const markVote = async (campaignId, address) => {
    const { ethereum } = window;

    // Check if MetaMask is installed
    if (!ethereum) {
        alert("Please install MetaMask.");
        return;
    }

    // Set up provider and signer
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(address, abi.abi, signer);

    try {
        // Call the markvote function
        const tx = await contract.markvote(campaignId);
        const receipt = await tx.wait(); // Wait for transaction confirmation

        // Return success result
        const result = {
            result: true,
            message: "Vote successfully cast!",
            account: receipt.from // Address of the signer
        };
        return result;

    } catch (error) {
        console.error("Error casting vote:", error);
        return {
            result: false,
            message: "Voting failed.",
            account: null
        };
    }
};

export default markVote;
