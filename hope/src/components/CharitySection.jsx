import React from 'react'
import { NavLink } from 'react-router-dom'
import charitybg from "../assets/charitybg.png"
import child2 from "../assets/child2.png"
import childbg2 from "../assets/childbg2.png"
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const CharitySection = () => {
  const contactDetails=[
    {
      id:1,
      title:"Phone",
      contact:"+91 969-530-7xx",
      icon:TbDeviceLandlinePhone,
      bg:"bg-bluefive",
    },
    {
      id:2,
      title:"Email",
      contact:"rishikeshari772@gmail.com",
      icon:MdEmail,
      bg:"bg-bluefour",
    },
    {
      id:3,
      title:"Address",
      contact:"Ajay Kumra Garg Engineering College",
      icon:FaLocationDot,
      bg:"bg-bluethree",
    },
  ]
  return (
    <div
  className='flex gap-5 md:gap-0 flex-col w-full h-fit bg-cover mt-20'
  style={{ backgroundImage: `url(${charitybg})` }}
>
<div className='flex gap-5 w-10/12 flex-col md:flex-row justify-between items-center mx-auto'>
    {/* left */}
    <div className='flex flex-col gap-2 md:gap-5 my-14 md:my-32'>
    <p className="md:text-primary text-black font-bold uppercase text-xl ">charity</p>
        <p className="text-textbrown max-w-[32rem] font-[Rowdies] font-medium text-3xl xl:text-5xl">
        Giving help to those 
        who need it
        </p>
        <p className='text-gray-500 font-semibold' > Charity is the act of giving help to those in need of it.<br/> It is a humanitarian act.</p>
        <NavLink to="/do">
        <button className="border-2 border-gray-500 text-primary  hover:scale-105 transform duration-300 font-semibold px-6 mt-5 py-2 rounded-full ">
            Make a Donation
          </button>
        </NavLink>
     </div>
     {/* Right */}
     <div className='relative'> 
    <img className='h-96' src={childbg2}/>
    <img src={child2} className=' absolute top-16 left-12 size-64 aspect-square object-fill rounded-lg' ></img>
     </div>
</div>
  {/* Contact*/}
  <div className='flex flex-col md:flex-row'>
  {contactDetails.map((data) => {
          // Create a dynamic Icon component from data.icon
          const Icon = data.icon;
          return (
            <div

              key={data.id}
              className={`flex flex-1 justify-start md:justify-center items-center gap-3 p-5 py-10 border-t ${ data.id === 1 ? "border-t-black" : "border-t-transparent"}  ${data.bg}`}
            >
            <div className='bg-white sm:p-5 md:p-2  xl:p-5 rounded-full flex justify-center items-center'><Icon className='text-4xl text-green-500' /></div>
              <div className='flex flex-col  font-medium'>
              <p className=' text-textbrown'>{data.title}</p>
              <p className='text-black'>{data.contact}</p>
              </div>
            </div>
          );
        })}
  </div>
</div>
  )
}

export default CharitySection
