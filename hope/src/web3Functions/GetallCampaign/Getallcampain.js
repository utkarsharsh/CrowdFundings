import { ethers } from 'ethers';
import abi from '../../abi/CrowdFunding.json';
import toast from 'react-hot-toast';

async function getCampaigns(account) {
    try {
        // Check if account is connected
        if (!account) {
            toast.error("Please connect your MetaMask account.");
            return { result: false, campaigns: [] };
        }

        // Set up provider
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

        const ABI = abi.abi;
        const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

        const contract = new ethers.Contract(address, ABI, provider);

        // Call the getCampaigns function on the contract
        const campaigns = await contract.getCampaigns();

        // Notify user of success
        toast.success("Campaigns retrieved successfully!");

        return { result: true, campaigns };
    } catch (error) {
        console.error("Error retrieving campaigns:", error);
        toast.error("Failed to retrieve campaigns. Please try again.");
        return { result: false, campaigns: [] };
    }
}

export default getCampaigns;
