// in this file we will be storing variables and functions that can be used across various components

import React, { createContext, useState } from 'react';
export const AppContext = createContext();

// creating a context provider function
const AppContextProvider = (props)=>{
    const [user, setUser] = useState(true);
    
    const value = {
        user,
        setUser
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;