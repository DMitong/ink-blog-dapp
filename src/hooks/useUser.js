import React, { useState, useEffect } from "react";
import { Ink } from "../contracts/Ink";

export const useUser = (userAddress) => {
  const inkContract = useInkContract();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await inkContract.getUser(userAddress);
      setUser(user);
    }

    fetchUser();
  }, [inkContract, userAddress]);

  return { user };
};
