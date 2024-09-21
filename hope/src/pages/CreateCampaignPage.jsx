import React, { useState } from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import charitybg from "../assets/charitybg.png" 
import "../index.css"
const CreateCampaignPage = () => {
  const [fileNames, setFileNames] = useState(Array(3).fill(""));
  const [thumbnail, setThumbnail] = useState("");

  const handleFileChange = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileNames((prev) => {
        const newFileNames = [...prev];
        newFileNames[index] = files[0].name;
        return newFileNames;
      });
    }
  };

  const handleThumbnailChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setThumbnail(files[0].name);
    }
  };

  const boxes = Array.from({ length: 20 });

  return (
    <div 
    // className="relative flex bg-bluefive "
    className='relative flex justify-center items-center max-w-[100vw] overflow-x-hidden bg-center  '
    style={{ backgroundImage: `url(${charitybg})` }}
    >
      <div className="absolute -z-0 inset-0 flex items-stretch">
        {boxes.map((_, index) => (
          <div
            key={index}
            className="absolute bg-[#BFE9FF] rounded-md opacity-50 animate-moveRight"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: '10s',
            }}
          ></div>
        ))}
      </div>

      <div className="image-glow2 z-50 bg-gray-50  border-gray-400 w-7/12 my-10 shadow-2xl mx-auto flex justify-center items-center flex-col rounded-xl sm:p-10 p-6">
        <h1 className="font-[rowdies] font-bold text-3xl md:text-4xl underline">
          Start a Campaign
        </h1>

        <form className="w-full mt-12 flex flex-col gap-8">
          <div className="flex flex-wrap gap-8">
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                Your Name <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
                required
              />
            </div>
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                Campaign Title <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Write a title"
                className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-[rowdies] text-textbrown mb-2">
              Description <span className="text-pink-500">*</span>
            </label>
            <textarea
              placeholder="Write about fund raise"
              className="py-2 font-[rowdies] font-normal px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark h-[150px] focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
              required
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-start items-center p-4 bg-[#8c6dfd] text-white rounded-md shadow-md">
            <RiMoneyRupeeCircleFill className=" text-3xl sm:text-6xl" />
            <h4 className="font-[rowdies] font-bold text-[20px] ml-4">
              You will get 100% of the raised amount
            </h4>
          </div>

          <div className="flex font-[rowdies] flex-col mt-4">
            <label className="font-[rowdies] text-textbrown mb-2">
              Upload Thumbnail <span className="text-pink-500">*</span>
            </label>
            <div className="flex border-2 p-2 rounded-lg items-center">
              <input
                type="file"
                accept="image/*"
                id="thumbnail-upload"
                className="hidden"
                onChange={handleThumbnailChange}
                required
              />
              <label
                htmlFor="thumbnail-upload"
                className="py-2 px-4 bg-primaryDark text-white rounded-md cursor-pointer hover:bg-bluethree transition duration-300"
              >
                Choose Thumbnail
              </label>
              {thumbnail && <span className="ml-4 text-gray-700">{thumbnail}</span>}
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                Goal <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder="ETH 0.50"
                className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
                required
              />
            </div>
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                End Date <span className="text-pink-500">*</span>
              </label>
              <input
                type="date"
                className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
                required
              />
            </div>
          </div>

          <div className="flex font-[rowdies] flex-col">
            <label className="font-[rowdies] text-textbrown mb-2">
              Category <span className="text-pink-500">*</span>
            </label>
            <select className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md" required>
              <option value="" disabled>Select a category</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="hunger">Hunger</option>
              <option value="disaster">Disaster</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-[rowdies] text-textbrown mb-2">
              Upload Images/Video Proofs <span className="text-pink-500">*</span>
            </label>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex border-2 p-2 rounded-lg items-center">
                <input
                  type="file"
                  accept="image/*,video/*"
                  id={`file-upload-${index}`}
                  className="hidden"
                  onChange={(event) => handleFileChange(index, event)}
                  required
                />
                <label
                  htmlFor={`file-upload-${index}`}
                  className="py-2 px-4 bg-primaryDark text-white rounded-md cursor-pointer hover:bg-bluethree transition duration-300"
                >
                  Choose File
                </label>
                {fileNames[index] && <span className="ml-4 text-gray-700">{fileNames[index]}</span>}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bluethree text-white py-2 px-4 rounded-md hover:bg-bluetwo transition duration-300"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaignPage;
