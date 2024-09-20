import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='flex bg-bluetwo justify-center items-center'>
    <div className='flex  w-10/12 my-10 flex-col gap-10 text-white'>
    {/* top */}
    <div className='md:flex  grid grid-cols-1 sm:grid-cols-2 gap-10 justify-around items-start'>
    {/* it have 4 section */}
    <div className="text-4xl font-bold">
          <NavLink to="/">
            ᕼOᑭE
          </NavLink>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold text-xl'>Home</h4>
          <NavLink to="/" className='text-gray-300'>About</NavLink>
          <NavLink to="/causes" className='text-gray-300'>Causes</NavLink>
          <NavLink to="/services" className='text-gray-300'>Services</NavLink>
          <NavLink to="/events" className='text-gray-300'>Events</NavLink>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='font-bold text-xl'>Services</h4>
          <p className='text-gray-300'>Direct Help</p>
          <p className='text-gray-300'>Giving Information</p>
          <p className='text-gray-300'>Raising Awareness</p>
          <p className='text-gray-300'>Relieving Poverty</p>
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=''>
            <FaFacebook className='text-3xl' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=''>
            <FaInstagram className='text-3xl' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=''>
            <FaTwitter className='text-3xl' />
          </a>
        </div>
    </div>
    {/* middle */}
    <div className='bg-white opacity-30 h-[2px]' ></div>
    {/* bottom */}
    <div className='flex flex-col md:flex-row gap-5  justify-between items-start'>
        <p className='text-gray-300'>Copyright © 2023 Dawit Tewelde. All Rights Reserved.</p>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-10'>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
    </div>
     </div>
    </div>
  )
}

export default Footer
