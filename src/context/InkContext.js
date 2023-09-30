import React, { createContext } from "react";

const InkContext = createContext(null);

export const InkProvider = ({ inkContract, children }) => {
  return (
    <InkContext.Provider value={inkContract}>
      {children}
    </InkContext.Provider>
  );
};

export const useInkContract = () => {
  const inkContract = React.useContext(InkContext);

  if (!inkContract) {
    throw new Error("InkContext is not available");
  }

  return inkContract;
};
