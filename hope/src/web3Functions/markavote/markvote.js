import { ethers } from "ethers";
import abi from '../../abi/CrowdFunding.json'
// Replace with your contract's address and ABI



const markVote = async (campaignId,address) => {
    const { ethereum } = window;

    if (!ethereum) {
        alert("Please install MetaMask.");
        return;
    }

    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = provider.getSigner();

    const contract = new ethers.Contract(address, abi.abi, signer);

    try {
        // Call the markvote function
        const tx = await contract.markvote(campaignId);
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
        return {
            result: false,
            message: "Voting failed.",
            account: null
        };
    }
};

export default markVote;
