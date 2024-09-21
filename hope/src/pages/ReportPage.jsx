import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import charitybg from "../assets/charitybg.png"
import child2 from "../assets/child2.png"
import childbg2 from "../assets/childbg2.png"
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ReportPage = () => {
  const [screenshot, setScreenshot] = useState("");
  const boxes = Array.from({ length: 20 });
  const handleThumbnailChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setScreenshot(files[0].name);
    }
  };
  return (
    <div 
    // className="relative flex bg-bluefive "
    className='relative flex justify-center items-center max-w-[100vw] overflow-hidden bg-center  '
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
          Report a Fraud
        </h1>

        <form className="w-full mt-12 flex flex-col gap-8">
          <div className="flex flex-wrap gap-8">
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                Your Name <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Rishi Keshari"
                className="py-2 px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
                required
              />
            </div>
            <div className="flex font-[rowdies] flex-col w-full sm:w-[45%]">
              <label className="font-[rowdies] text-textbrown mb-2">
                Address <span className="text-pink-500">*</span>
              </label>
              <input
                type="text"
                placeholder="987vd8y782"
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
              placeholder="Write about fraud"
              className="py-2 font-[rowdies] font-normal px-4 outline outline-bluefour rounded-md bg-white bg-opacity-90 text-primaryDark h-[150px] focus:outline-none focus:ring-2 focus:ring-bluefour shadow-md"
              required
            />
          </div>

          <div className="flex font-[rowdies] flex-col mt-4">
            <label className="font-[rowdies] text-textbrown mb-2">
              Upload Screenshot <span className="text-pink-500">*</span>
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
                Choose Screenshot
              </label>
              {screenshot && <span className="ml-4 text-gray-700">{screenshot}</span>}
            </div>
          </div>


          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bluethree text-white py-2 px-4 rounded-md hover:bg-bluetwo transition duration-300"
            >
              Report Fraud
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReportPage
