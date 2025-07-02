import React from 'react'
import {Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  { useContext } from "react";


const App = () => {
 const {showLogin} = useContext(AppContext);
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28  min-h-screen bg-gradient-to-b from-teal-50 to-orange-50' >
      <ToastContainer position='bottom-right'/>
      {/* providing nevigation bar for all the pages */}
      <Navbar />
      {/* showing the login form if showLogin is true */}
      {showLogin && <Login />}
      {/* if showLogin is true then the login form will be shown */}
      {/* otherwise the home page will be shown */}
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
