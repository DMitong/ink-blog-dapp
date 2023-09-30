import { useInkContract } from "./useInkContract"; // Import the useInkContract hook
import { useState } from "react";

export const useTipOnPost = () => {
  const inkContract = useInkContract(); // Use the useInkContract hook to get the contract instance

  const tipOnPost = async (postId, tipAmount) => {
    try {
      // Call the smart contract function to tip the post creator
      await inkContract.tipOnPost(postId, tipAmount);
      // Optionally, you can update the post details after tipping
      const updatedPost = await inkContract.getPost(postId);
      return updatedPost;
    } catch (error) {
      // Handle errors here (e.g., display an error message)
      console.error("Error tipping post creator:", error);
      throw error; // Rethrow the error to handle it in the calling component if needed
    }
  };

  return { tipOnPost };
};
