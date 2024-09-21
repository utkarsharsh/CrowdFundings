import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/CrowdFunding.json'; // Adjust the path to your ABI file

const LoginPage = () => {
  const [name, setName] = useState("");
  const [mess, setMess] = useState("");
  const [result, setResult] = useState([]);

  const connectWallet = async () => {
    if (mess === "" || name === "") {
      alert("Please fill in the details.");
      return;
    }

    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    try {
      // Request account access
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // Set up provider and signer
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const signer = new ethers.JsonRpcSigner(provider, accounts[0]);
      console.log("sign",signer);
      console.log("wdas",provider);
      console.log("account",accounts);
      const ABI = abi.abi;
      const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; 

      const contract = new ethers.Contract(address, ABI, provider);
      const contractWithSigner = new ethers.Contract(address, ABI, signer);
      const title = "Campaign Title"; // Replace with actual title
      const description ="askkaks"; // Use the message input as description
      const target = 1;// Target amount in ETH
      const deadline = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24 hours from now
      const image = "image-url"; // Replace with actual image URL
      const theme = "Theme"; // Replace with theme
      const types = "Type"; // Replace with type

      const tx = await contractWithSigner.createCampaign(accounts[0], title, description, target, deadline, image, theme, types);
      await tx.wait(); // Wait for the transaction to be mined

    
      

    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("An error occurred. Please try again.");
    }
  };
  async function check (){
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // Set up provider and signer
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
      const signer = new ethers.JsonRpcSigner(provider, accounts[0]);
      console.log("sign",signer);
      console.log("wdas",provider);
      console.log("account",accounts);
      const ABI = abi.abi;
      const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; 

      const contract = new ethers.Contract(address, ABI, provider);
      const contractWithSigner = new ethers.Contract(address, ABI, signer);
    let campaigns = await contract.getCampaigns();

    // Set the result state with fetched campaigns
  

    // Optionally, log the campaigns to see the data
    console.log("campain",campaigns);
    campaigns.map((e)=>{
         console.log(e.title);
    })
  } 
  return (
    <div className='bg-blue-500 p-5'>
      <h1 className="text-white text-2xl mb-4">Login Page</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2"
      />
      <textarea
        placeholder="Enter your message"
        value={mess}
        onChange={(e) => setMess(e.target.value)}
        className="mb-2 p-2"
      />
      <button onClick={connectWallet} className="bg-white text-blue-500 p-2">
        Connect Wallet
      </button>
      <button onClick={check}>
        f4oihr
      </button>
    </div>
  );
};

export default LoginPage;
