import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import homeimage from "../assets/homeimage.png";
import pic from "../assets/pic.png";
import Oval from "../assets/Oval.png";
import { ethers } from 'ethers';
import Rectangle from "../assets/Rectangle.png";
import { FaArrowRightLong } from "react-icons/fa6";
import CardSection from "../components/CardSection";
import ImportantCharity from "../components/ImportantCharity";
import { NavLink } from "react-router-dom";
import AboutAndNumber from "../components/AboutAndNumber";
import GallerySection from "../components/GallerySection";
import JoinOurMission from "../components/JoinOurMission";
import CharitySection from "../components/CharitySection";
import checkimg from "../assets/check.png"
import CustomButton from '../components/Countbutton';
import { Input } from 'postcss';
import charitybg from "../assets/charitybg.png"
import child2 from "../assets/child2.png"
import childbg2 from "../assets/childbg2.png"
import getCampaigns from "../web3Functions/GetallCampaign/Getallcampain";
import  { useEffect } from "react";
import markVote from '../web3Functions/markavote/markvote';
import donateToCampaign from '../web3Functions/Donatecampaign/Donate';
const DonationItemPage = ({account}) => {
  const { id } = useParams();
  const [myCampaign, setMyCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ a ,setamount]= useState(null)


  async function handleComingCampaign() {
      const result = await getCampaigns(account);
      const real = result.campaigns.filter((campaign) => campaign[0].toString() === id); // Compare as strings
      if (real.length > 0) {
          setMyCampaign(real[0]); // Set the first matching campaign
      }
      console.log(real,"wfdwebjfjwebdfjbe")
      setLoading(false);
  }

  useEffect(() => {
      handleComingCampaign();
  }, [account]);

  const getDaysLeft = (endDate) => {
    const end = new Date(endDate);
    const today = new Date();
    // Calculate the difference in milliseconds and convert to days
    const diffInTime = end - today;
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays >= 0 ? diffInDays : 0; // Return 0 if the date has passed
  };
     
 async function voteit (){
   const result=markVote(id,account);

    handleComingCampaign();
   
 }
 async function handledonate (){
   const result =await donateToCampaign(id,a,account);
   if(result.result){
    handleComingCampaign();
   }
 }
     

    const ourNumber = [
      {
        id: 1,
        number: "20M",
        title: "Number of Supporters",
      },
      {
        id: 2,
        number: "15K+",
        title: "Volunteers Worldwide",
      },
      {
        id: 3,
        number: "68K+",
        title: "We've Helped Raise",
      },
    ];
    const state = {
        pId: 1,
        image: 'https://via.placeholder.com/410', // Replace with actual image URL
        owner: '0x1234567890abcdef1234567890abcdef12345678',
        description: 'This is a sample campaign description. Support us to achieve our goals!',
        target: '5 ETH',
        amountCollected: '2 ETH',
        deadline: '2023-12-31',
    };

    const donators = [
        { donator: '0xabcdef1234567890abcdef1234567890abcdef12', donation: '0.5 ETH' },
        { donator: '0xabcdef1234567890abcdef1234567890abcdef34', donation: '1 ETH' },
    ];

    const remainingDays = 100; // Example static value
    const amount = 10;

    return (
      <>
      <div className="overflow-x-clip">
      {/* section1 */}
      <div className="relative">
        <div className="relative animate-bgPulse   bg-bluefive flex flex-col  md:flex-row-reverse py-20 pb-28 gap-10 justify-around items-center">
          {/* left */}
          <div className="ml-5 z-20 w-10/12 text-center md:text-left md:max-w-[30rem] space-y-5">
            <h1 className="flex text-textbrown text-5xl font-[Rowdies]">
              {myCampaign?.title}
            </h1>
            <p className="text-blueone">
              {
                myCampaign?.description 
              }
            </p>
            <NavLink to="/donate"><button className="bg-bluethree hover:bg-bluetwo text-white px-8 py-3 mt-5 rounded-full font-medium ">
              Make A Donation
            </button></NavLink>
            
          </div>
          {/* right */}
          <div className="relative inline-block md:flex ">
            <img
              className=" size-80 md:size-96 aspect-square z-20 top-7 right-7"
              src={pic}
            />
            <img
              className=" absolute top-7 md:top-10 xl:top-0  right-7 z-30 size-64 md:size-[18rem] xl:size-[22rem] aspect-square rounded-full image-glow"
              src={myCampaign?.image}
            ></img>
          </div>
          <img
            className="absolute block md:hidden xl:block size-80 -right-52 md:size-[40rem] md:-right-[25rem] -bottom-28 z-10"
            src={Rectangle}
          />
          <img
            className="absolute size-28 -left-16 top-5 hidden sm:block"
            src={Oval}
          ></img>
          <div className="absolute -z-0 inset-0">
            <div className="absolute bg-[#BFE9FF] w-32 h-32 rounded-md opacity-50 top-10 animate-moveRight"></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-28 h-28 rounded-md opacity-50 top-20 animate-moveRight"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-36 h-36 rounded-md opacity-50 top-40 animate-moveRight"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-24 h-24 rounded-md opacity-50 top-60 animate-moveRight"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute -z-0 bg-[#BFE9FF] w-40 h-40 rounded-md opacity-50 top-80 animate-moveRight"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
          {/* Our Number */}
        </div>
        <div className="text-center z-50 ">
          <div className="xl:absolute -bottom-16 right-64 mx-auto xl:mx-24 mb-2 mt-5 border xl:border-none border-black w-fit z-50 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-8 bg-white rounded-lg  shadow-xl">
          <div className="text-center p-8 rounded-lg">
                <p className="text-primary text-4xl font-extrabold">
                {String(myCampaign?.amountCollected)[0] }{String(myCampaign?.amountCollected)[1]}
                </p>
                <div className="h-[1.5px] rounded-full w-10 mx-auto bg-gray-800 mb-2"></div>
                <p className="font-bold text-sm">Amount raised</p>
              </div>
              <div className="text-center p-8 rounded-lg">
                <p className="text-primary text-4xl font-extrabold">
                {Number(myCampaign?.target)}
                </p>
                <div className="h-[1.5px] rounded-full w-10 mx-auto bg-gray-800 mb-2"></div>
                <p className="font-bold text-sm">Goal</p>
              </div>
              <div className="text-center p-8 rounded-lg">
                <p className="text-primary text-4xl font-extrabold">
                {getDaysLeft(Number(myCampaign?.deadline)*1000 )} 
                </p>
                <div className="h-[1.5px] rounded-full w-10 mx-auto bg-gray-800 mb-2"></div>
                <p className="font-bold text-sm"> Day left</p>
              </div>
            <div className="hidden xl:block bg-bluefour text-white p-8 px-10 rounded-r-lg text-left">
              <div className="h-[2px] rounded-full w-10  bg-gray-800 mb-2"></div>
              <p className="font-bold">
                {myCampaign?.owner}
              </p>
              <p className="mt-2 text-bluefive text-sm">
                become a Volunteer{" "}
                <FaArrowRightLong className="inline-block ml-1 text-black" />
              </p>
            </div>
          </div>
          <div className="inline-block xl:hidden bg-red-500 text-white p-8 px-10 rounded-lg text-left">
            <div className="h-[2px] rounded-full w-10  bg-gray-800 mb-2"></div>
            <p className="font-bold">
              Our Goal is to <br /> Help Poor People
            </p>
            <p className="mt-2 text-white text-sm">
              become a Volunteer{" "}
              <FaArrowRightLong className="inline-block ml-1 text-black" />
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className='w-full bg-bluefive  items-center flex   flex-col mt-20 '>
        <h1 className='mt-10 font-bold text-3xl '>
        Their Gallery
        </h1>
        <div className=' w-[80%] flex lg:justify-between flex-wrap gap-3 items-center justify-center  mt-20 mb-20  '>
         <div className=''>
          <img src='https://www.bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg' height={300} width={300} className=' rounded-md image-glow' alt="xyz">
          </img>
         </div>
         <div className=''>
          <img src='https://www.bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg' height={300} width={300} className=' rounded-md image-glow' alt="xyz">
          </img>
         </div>
         <div className=''>
          <img src='https://www.bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg' height={300} width={300} className=' rounded-md image-glow' alt="xyz">
          </img>
         </div>  
        </div>
       
      </div>
      <div className='w-full flex justify-between items-center flex-col mt-10'>
          <div>
          <h1 className='mt-10 font-bold text-3xl '>
          Donate them
        </h1>
          </div>
          <div className='mt-5 flex w-[80%] image-glow rounded-lg bg-white'>
        <div  className='w-[50%] mt-[20px]  flex-col shadow-lgs shadow-bluefive items-center flex rounded-lg '>
       <div className='h-[50px]' >
        <p className="font-epilogue font-medium text-[20px] mt-2 leading-[30px] text-center text-[#808191]">
        Funded Peoples
        </p>
       </div>
       <div className='w-full h-[440px] overflow-y-scroll'>
       {
          myCampaign?.donators &&  myCampaign?.donators.map((e)=>{
            return(
            <div className='flex  items-center gap-3 p-2 image-glow rounded-lg m-5'>
          <img src="https://github.com/shadcn.png" alt="" className='rounded-full ' width={50} height={50}  />
          <h4 className="font-epilogue font-semibold  ml-4  text-blueone">
          {e}
        </h4>
         </div>)
          })
        }
    </div>   
    </div>
    <div className=' flex justify-center w-[50%] items-center h-[500px] mt-[20px]  rounded-lg' >
    <div className=" flex-1">
    <div className="mt-[20px] flex flex-col   p-4 ">
    <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]">
      Fund the campaign
    </p>
    <div className="mt-[30px]">
      <input 
        type="number"
        placeholder="ETH 0.1"
        step="0.01"
        className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
        aria-label="Amount to fund in ETH"
        value={a}
        onChange={(e)=>{setamount(e.target.value)}}
      />

      <div className="my-[20px] p-4 bg-bluefive rounded-[10px]">
        <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-blueone">
          Back it because you believe in it.
        </h4>
        <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
          Support the project for no reward, just because it speaks to you.
        </p>
      </div>
      <CustomButton 
        btnType="button"
        title="Fund Campaign"
        styles="w-full bg-[#8c6dfd]"
        handleClick={handledonate}
      />
      </div>
      </div>
      </div>  
      </div>
      </div>
      </div>
    
      <div
  className='flex w-full h-fit bg-cover my-20'
  style={{ backgroundImage: `url(${charitybg})` }}
>
<div className='flex gap-5 w-10/12 flex-col md:flex-row justify-between items-center mx-auto'>
    {/* left */}
    <div className='flex flex-col gap-2 md:gap-5 my-14 md:my-32'>
     <div className='p-5 text-center bg-blueone text-bluefive rounded-md'>
      <h1 className='font-bold '>
       Total  Votes
      </h1>
        <p>
         {myCampaign?.noofvotes ? `${Number(myCampaign?.noofvotes)}` :"0"}
        </p>
     </div>
     <div className='p-5 text-center bg-red-500 cursor-pointer text-bluefive rounded-md'>
      <h1 className='font-bold ' onClick={voteit}>
      Give A VOTE
      </h1>
       
     </div>
     </div>
     {/* Right */}
     <div className='relative h-[300px] bg-blueone overflow-y-auto rounded-md'> 
     <div className='flex  items-center gap-3 p-2 image-glow rounded-lg m-5'>
          <img src="https://github.com/shadcn.png" alt="" className='rounded-full ' width={50} height={50}  />
          <h4 className="font-epilogue font-semibold  ml-4  text-white">
          Back it because you believe in it.
        </h4>
         </div>
         <div className='flex  items-center gap-3 p-2 image-glow rounded-lg m-5'>
          <img src="https://github.com/shadcn.png" alt="" className='rounded-full ' width={50} height={50}  />
          <h4 className="font-epilogue font-semibold  ml-4  text-white">
          Back it because you believe in it.
        </h4>
         </div>
        
        
     </div>
     <div className='relative flex gap-4 flex-col' > 
     <input 
        type="text"
        placeholder="ETH 0.1"
        step="0.01"
        className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
        aria-label="Amount to fund in ETH"
      />
      <button className='p-3 bg-red-500 text-bluefive rounded-md mb-3'>
        Comment
      </button>
     </div>
</div>
  {/* Other content here */}
</div>
      </>
    );
}

export default DonationItemPage;
