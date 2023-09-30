import React, { useState, useEffect } from "react";
import { Ink } from "../contracts/Ink";

// useInkContract hook
export const useInkContract = () => {
  const [inkContract, setInkContract] = useState(null);

  useEffect(() => {
    const inkContract = new Ink(process.env.INK_CONTRACT_ADDRESS);
    setInkContract(inkContract);
  }, []);

  return inkContract;
};
