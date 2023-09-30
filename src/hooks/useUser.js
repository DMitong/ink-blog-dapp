import React, { useState, useEffect } from "react";
import { Ink } from "../contracts/Ink";

// Add this to your useUser hook
export const useUser = (userAddress) => {
  const inkContract = useInkContract();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await inkContract.getUser(userAddress);
      setUser(user);
    }

    if (userAddress) {
      fetchUser();
    }
  }, [inkContract, userAddress]);

  return { user };
};
