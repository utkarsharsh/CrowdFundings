import React from 'react'
import { NavLink } from 'react-router-dom'
import charitybg from "../assets/charitybg.png"
import child2 from "../assets/child2.png"
import childbg2 from "../assets/childbg2.png"
const CharitySection = () => {
  return (
    <div
  className='flex w-full h-fit bg-cover my-20'
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
        <NavLink>
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
  {/* Other content here */}
</div>
  )
}

export default CharitySection
