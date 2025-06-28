import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link , useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  // state to check if user is logged in or not
  // get user from context
  const { user } = useContext(AppContext);
    // if null , user is not logged in, if object then user is logged in
    
 const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      {/* given link to home page that if clicked on image app will be redirected to home page */}
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex  items-center gap-2 sm:gap-3" >
            <button
              onClick={() => {
                navigate("/buy");
              }}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700
             " >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600" >Credits left : 50</p>
            </button>
            <p  className="text-gray-600 max-sm:hidden pl-4" >Hi, Yukti </p>
            <div className="group relative">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10  drop-shadow "
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10"  >Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            {/* here we have to impement click feature this if pricing clicked it should nevigate to credit page using nevigate from react router dom */}
            <p
              onClick={() => {
                navigate("/buy");
              }}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button className="bg-zinc-700 hover:bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
