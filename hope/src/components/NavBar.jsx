import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import connectWallet from "../web3Functions/connectwallet/connect"
const NavBar = ({setaccount}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Show login/signup by default
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  async function handlemetamask (){
    const result= await connectWallet();
    if(result.result){
      setaccount(result.account);
      setIsLoggedIn(true);
    }
  }
   

  return (
    <nav className="bg-bluefive text-textbrown font-medium p-4 shadow-b-black shadow-inner border-b border-gray-400 ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="text-4xl text-black font-bold">
          <NavLink to="/" className="hover:text-secondary text-blueone">
            ᕼOᑭE
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex mx-5 items-center space-x-4 xl:space-x-8">
          {/* <NavLink 
            to="/" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer p-2  rounded-2xl ${isActive ? 'bg-blue-200' : ''}`}
          >
            Home
          </NavLink> */}
          <NavLink 
            to="/donate" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer p-2  rounded-2xl ${isActive ? 'bg-blue-200' : ''}`}
          >
            Donate
          </NavLink>
          <NavLink 
            to="/report-fraud" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer p-2 rounded-2xl ${isActive ? 'bg-blue-200' : ''}`}
          >
            Report Fraud
          </NavLink>
          <NavLink 
            to="/create-campaign" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer text-blueone p-2 rounded-2xl ${isActive ? 'bg-blue-200' : ''}`}
          >
            Create Campaign
          </NavLink>
          <NavLink 
            to="/subscription" 
            className={({ isActive }) => `hover:text-secondary cursor-pointer text-blueone p-2 rounded-2xl ${isActive ? 'bg-blue-200' : ''}`}
          >
          Subscription
          </NavLink>
        </div>

        {/* Login/Signup or Profile */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              {/* Login Button */}
              <button 
               onClick={handlemetamask}
                className="bg-transparent border border-blueone text-blueone px-4 py-2 rounded hover:bg-bluetwo hover:text-white transition duration-300"
              >
                Connect to metamask
              </button>

            </>
          ) : (
            <NavLink 
              to="/profile" 
              className="text-3xl cursor-pointer"
            >
              <FaUserCircle />
            </NavLink>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-xl focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/60 rounded-lg px-2 shadow-md mt-2 flex flex-col items-center space-y-4 py-4">
          <NavLink 
            to="/" 
            className="block text-center px-4 py-2 w-full"
          >
            Home
          </NavLink>
          <NavLink 
            to="/donate" 
            className="block text-center px-4 py-2 w-full"
          >
            Donate
          </NavLink>
          <NavLink 
            to="/report-fraud" 
            className="block text-center px-4 py-2 w-full"
          >
            Report Fraud
          </NavLink>
          <NavLink 
            to="/create-campaign" 
            className="block text-center px-4 py-2 w-full"
          >
            Create Campaign
          </NavLink>
          <NavLink 
            to="/subscription" 
            className="block text-center px-4 py-2 w-full"
          >
            Subscription
          </NavLink>
          {!isLoggedIn ? (
            <>
              {/* Mobile Login Button */}
              <button 
                className="bg-transparent border border-blueone text-blueone px-4 py-2 rounded w-full hover:bg-blueone hover:text-white transition duration-300"
              >
              <NavLink to='/login'>Login</NavLink>
                
              </button>

              {/* Mobile Signup Button */}
              <button  
                className="bg-blueone text-white px-4 py-2 rounded w-full hover:bg-transparent hover:text-blueone border border-blueone transition duration-300"
              >
                 <NavLink to="/signup">Signup</NavLink>
              </button>
            </>
          ) : (
            <NavLink 
              to="/profile" 
              className="block text-center px-4 py-2 hover:bg-secondary w-full cursor-pointer"
            >
              My Profile
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
