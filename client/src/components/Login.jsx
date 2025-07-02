import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from 'axios'

import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  const [state, setState] = useState('Login');

  const { setShowLogin , backendUrl , setToken ,setUser} = useContext(AppContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // if user is login
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        // check if success is true so that get token and save 
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          // store data in browsers local storage
          localStorage.setItem('token', data.token)
          // hide login form
          setShowLogin(false)
        }
        else {
          // add one error message using toast message
          toast.error(data.message)
        }
      }

      // and if not login that means we need to call user signup api
      else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
  
        }
        else {
          toast.error(data.message)
        }
        
      }

    }
    catch (error) {
      toast.error(error.message);
    }
  }

  // for diabling the scroll when the login form is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";// re-enable scroll when the component is unmounted
    }
  }, [])
  


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-blue-50/30 flex justify-center items-center">
      <motion.form
      onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} width={30} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-5 py-2 flex items-center gap-4 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="border px-5 py-2 flex items-center gap-4 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 cursor-pointer my-4">
          Forgot password
        </p>
        <button
          className="bg-blue-600 
        hover:bg-blue-700 transition-all duration-300 
        ease-in-out
        w-full text-white py-2 rounded-full"
        >
          {state === "Login" ? "Login" : " Create Account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        {/* close the form */}
        <img
          onClick={() => {
            setShowLogin(false);
          }}
          src={assets.cross_icon}
          className="absolute top-5 cursor-pointer right-5"
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default Login;
