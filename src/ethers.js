import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./config";
import InkContract from "./contracts/Ink.json";

let provider;
let signer;
let inkContract;

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      inkContract = new ethers.Contract(CONTRACT_ADDRESS, InkContract.abi, signer);
      return true;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return false;
    }
  } else {
    console.error("No wallet provider detected");
    return false;
  }
};

export const getInkContract = () => {
  return inkContract;
};
