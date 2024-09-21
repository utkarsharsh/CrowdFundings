import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AboutPage from './pages/AboutPage'
import ReportPage from './pages/ReportPage'
import DonatePage from './pages/DonatePage'
import ProfilePage from './pages/ProfilePage'
import DonationItemPage from './pages/DonationItemPage'
import Footer from './components/Footer'
import CreateCampaignPage from './pages/CreateCampaignPage'
function App() {
  const [account,setaccount]=useState();
  const [mycampain,setmycampain]=useState();
  return (
    
    <div className='max-w-screen min-h-screen flex flex-col justify-between '>
    <NavBar setaccount={setaccount}/>
    <div className='min-h-[50vh]'>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/login' element={<LoginPage/>} ></Route>
        <Route path='/signup' element={<SignupPage/>} ></Route>
        <Route path='/about' element={<AboutPage />} ></Route>
        <Route path='/report-fraud' element={<ReportPage account={account}/>} ></Route>
        <Route path='/donate' element={<DonatePage account={account} setmycampain={setmycampain}/>} ></Route>
        <Route path='/profile' element={<ProfilePage/>} > </Route>
        <Route path='/donate/:id' element={<DonationItemPage account={account}/>} ></Route>
        <Route path="/create-campaign" element={<CreateCampaignPage account={account}/>} ></Route>
      </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
