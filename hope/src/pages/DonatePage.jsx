import React, { useEffect, useState } from "react";
import { campaignData } from "../Data/CharityData";
import Oval from "../assets/Oval.png";
import { ethers } from "ethers";
import Rectangle from "../assets/Rectangle.png"
import { MdArrowOutward } from "react-icons/md";
import Group8 from "../assets/Group8.png";
import { NavLink } from "react-router-dom";
import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";
import getCampaigns from "../web3Functions/GetallCampaign/Getallcampain";
const DonatePage = ({account}) => {
  const [campaign,setcampaign]=useState([]);
  async function handlecomingcampaign(){
    const result = await getCampaigns(account);
    setcampaign(result.campaigns);
    console.log(result.campaigns);
  }

  useEffect(()=>{
       handlecomingcampaign();
  },[account])
  const getDaysLeft = (endDate) => {
    const end = new Date(endDate);
    const today = new Date();
    // Calculate the difference in milliseconds and convert to days
    const diffInTime = end - today;
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays >= 0 ? diffInDays : 0; // Return 0 if the date has passed
  };

  return (
    <div className="overflow-x-clip">
      {/* section1 */}
      <div className="relative">
        <div className="bg-bluefive/50 flex flex-col py-10 gap-10 justify-start items-center">
          {/* left */}
          <div className="z-20 flex flex-col gap-10 w-10/12">
            <h1 className="flex text-3xl sm:text-4xl md:text-5xl font-[Rowdies]">
              Featured Charity
            </h1>
            {/* All Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              {campaign.map((data) => {
              if(data?.image=='w' || !data.image || data?.image == 'image-url'){
               return <></>
              }

             return ( <div
                  key={data.id}
                  className="flex flex-col gap-3 text-bluethree p-5 bg-white/90 shadow-[0_8px_32px_0_rgba(51,98,135,0.7)] backdrop-blur-[25px] backdrop-saturate-0 border-2  rounded-[12px] border-1 border-bluefour/60">
                  {/* top */}
                  <div className="flex flex-col gap-2">
                    <div className="flex  justify-between">
                      <div className="flex gap-2">
                        <div className="p-[6px] border-2 border-sky-600 rounded-xl">
                          <img
                            src={data?.image}
                            className="w-20 h-20 aspect-square object-fill rounded-xl"
                            alt={data?.title} // Added alt attribute for accessibility
                          />
                        </div>
                        <div className="flex flex-col">
                        <p className="text-xl mt-1 font-bold">{data?.title}</p>
                        <div className="flex items-center gap-3" >
                        <p className="text-sm text-red-500 mt-1 font-bold">Id: {data?.owner}</p>
                        <button
    onClick={() => {
        navigator.clipboard.writeText(data.owner)
            .then(() => toast.success("Text Copied"))
            .catch(() => toast.error("Failed to Copy"));
    }}
    className="ml-2 p-1 text-sm hover:bg-gray-200 rounded"
    aria-label="Copy ID"
    title="Copy ID"
>
    <MdContentCopy />
</button>
                        </div>
                        </div>
                      </div>
                      <div>
                        <MdArrowOutward className="text-3xl text-gray-500" />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                      <p className="bg-gray-200 text-bluethree px-3 py-2 rounded-xl font-medium">
                        #{data?.theme}
                      </p>
                      <div className="flex gap-2">
                        <img src={Group8} className="h-6" alt="Group Icon" /> {/* Added alt attribute */}
                        <p className="flex gap-[2px] font-bold">
                          <span>+</span>
                          <span>{data?.donated}</span>
                          <span className="text-black/80">Donated</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="flex w-full flex-1 border-b-4 border-sky-200 rounded-full h-[2px]"></div>
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sky-800">
                      {data.description.substring(0, 165)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1 font-semibold">
                        <span className="font-extrabold">Ξ</span> { Number(data?.amountCollected)}
                      </p>
                      <p className="flex items-center gap-1 text-violet-700 font-semibold">
                        <span className="font-extrabold">Ξ</span> {Number(data?.target)}
                      </p>
                    </div>
                    <div className="flex bg-sky-100 rounded-full h-[3px]">
                      <div
                        className="bg-red-600 rounded-full h-full"
                        style={{
                          width: `${(data.raisedAmount / data.requiredAmount) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2 justify-between">
                      <p className="bg-gray-200 text-gray-500 my-auto py-2 px-3 rounded-xl font-medium">
                         {getDaysLeft(Number(data.deadline)*1000 )} days left
                      </p>
                      <div className="uppercase flex flex-1 sm:flex-none  text-white font-bold px-5 py-2 rounded-lg sm:rounded-full mt-2 bg-bluethree hover:bg-bluetwo">
                      <NavLink to={`/donate/${data.id}`}>
                        <button >
                          Donate
                        </button>
                      </NavLink>
                      </div>
                    </div>
                  </div>
                </div>)
})}
            </div>
          </div>
          {/* right */}
          <img
            className="absolute size-28 -left-16 top-5 hidden sm:block"
            src={Oval}
            alt="Decoration" // Added alt attribute for accessibility
          />
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
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
