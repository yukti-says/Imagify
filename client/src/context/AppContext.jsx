// in this file we will be storing variables and functions that can be used across various components

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
import { toast } from "react-toastify";
export const AppContext = createContext();

// creating a context provider function
const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState(false);
  // got credit? then after logged in this should be updated! for this defined a function

  // adding for backend url
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCreditData = async () => {
    try {
      // calling credits api
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      // check responses
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
      // to execute this function we will be using useEffect
    } catch (error) {
      toast.error(error.message);
    }
    };
    
    

  // logout feature
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);
  // so whenever the token[new user will be changed] this function will be called
  // now provide this backend for each component
  // pass this loadCreditData so that any other component can use it
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logout,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
