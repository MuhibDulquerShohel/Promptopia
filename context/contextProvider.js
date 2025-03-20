"use client";
import { createContext, useEffect, useState } from "react";

export const Web3Context = createContext();


export const ContextProvider = ({ children }) => { 
    const [profile, setProfile] = useState([]);
    return (
    <Web3Context.Provider
      value={{
        profile, setProfile
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};