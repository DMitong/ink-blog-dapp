import { useState, useEffect } from "react";
import { InkContractAddress } from "../constants/addresses";

// useInkContract hook
export const useInkContract = () => {
  const [inkContract, setInkContract] = useState(null);

  useEffect(() => {
    const inkContract = new InkContractAddress();
    setInkContract(inkContract);
  }, []);

  return inkContract;
};
