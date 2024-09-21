import { ethers } from 'ethers';
import abi from '../../abi/CrowdFunding.json';
import toast from 'react-hot-toast';

async function CreatCampaign(account, form) {
    try {
        // Check if account is connected
        if (!account) {
            toast.error("Please connect your MetaMask account.");
            return { result: false };
        }

        // Convert deadline date to Unix timestamp
        const deadlineTimestamp = Math.floor(new Date(form.deadline).getTime() / 1000);

        // Set up provider and signer
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer = new ethers.JsonRpcSigner(provider, account);

        const ABI = abi.abi;
        const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

        const contract = new ethers.Contract(address, ABI, provider);
        const contractWithSigner = new ethers.Contract(address, ABI, signer);

        // Create the campaign
        const tx = await contractWithSigner.createCampaign(
            account, 
            form.title, 
            form.description, 
            form.target, 
            deadlineTimestamp, // Pass the timestamp here
            form.image, 
            form.theme, 
            form.types
        );

        await tx.wait(); // Wait for the transaction to be mined
        const data = await contract.numberOfCampaigns();
        // Notify user of success
        toast.success("Campaign created successfully!");

        return { result: true,teams:data };
    } catch (error) {
        console.error("Error creating campaign:", error);
        toast.error("Failed to create campaign. Please try again.");
        return { result: false };
    }
}

export default CreatCampaign;
