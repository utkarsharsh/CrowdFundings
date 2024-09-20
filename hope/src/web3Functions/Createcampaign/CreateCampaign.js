import { results } from '../../../../ignition/modules/Lock';
import abi from '../../abi/CrowdFunding.json'

async function CreatCampaign( account , form,address) {
    try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

// Set up provider and signer
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = new ethers.JsonRpcSigner(provider, account);

  const ABI = abi.abi;
 

   const contract = new ethers.Contract(address, ABI, provider);
   const contractWithSigner = new ethers.Contract(address, ABI, signer);
   const tx = await contractWithSigner.createCampaign(account, form.title, form.description, form.target, form.deadline, form.image, form.theme, form.types);
    await tx.wait(); // Wait for the transaction to be mined
    return {
    result:true,
     }
    } catch (error) {
        return   {
            result:false,
         }
    }   
   }
export default CreatCampaign;
