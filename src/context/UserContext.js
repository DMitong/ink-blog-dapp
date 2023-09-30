import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userAddress) => {
    // Perform user login logic, e.g., verify user in your smart contract
    setUser({ address: userAddress });
  };

  const logout = () => {
    // Perform user logout logic, e.g., clear user data
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
