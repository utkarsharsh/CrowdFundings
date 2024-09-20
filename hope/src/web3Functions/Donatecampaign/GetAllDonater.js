import abi from '../../abi/CrowdFunding.json'
const fetchDonators = async (campaignI,address) => {
    const { ethereum } = window;
  
    if (!ethereum) {
      alert("Please install MetaMask.");
      return;
    }
  
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    const contract = new ethers.Contract(address, abi.abi, provider);
  
    try {
      const [success, message, donators, donations] = await contract.getDonators(campaignId);
  
      if (success) {
        return {
          result: true,
          message: message,
          donators: donators,
          donations: donations,
        };
      } else {
        return {
          result: false,
          message: message,
          donators: [],
          donations: [],
        };
      }
    } catch (error) {
      console.error("Error fetching donators:", error);
      return {
        result: false,
        message: "Failed to retrieve donators.",
        donators: [],
        donations: [],
      };
    }
  };
  export default fetchDonators