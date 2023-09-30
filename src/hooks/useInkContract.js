import { useState, useEffect } from "react";
import { InkAddress } from "../constants/addresses";

// useInkContract hook
export const useInkContract = () => {
  const [inkContract, setInkContract] = useState(null);

  useEffect(() => {
    const inkContract = new InkAddress();
    setInkContract(inkContract);
  }, []);

  return inkContract;
};
