import React, { createContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ user, children }) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = React.useContext(UserContext);

  if (!user) {
    throw new Error("UserContext is not available");
  }

  return user;
};
