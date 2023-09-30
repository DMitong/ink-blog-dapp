import React from "react";
import { InkProvider, UserProvider } from "./contexts";
import { InkContract } from "./contracts/Ink";
import { Homepage } from "./pages/Homepage";

const App = () => {
  const inkContract = new InkContract(process.env.INK_CONTRACT_ADDRESS);
  const user = null; // TODO: Get the current user from the Ink smart contract

  return (
    <InkProvider inkContract={inkContract}>
      <UserContext.Provider value={user}>
        <Homepage />
      </UserContext.Provider>
    </InkProvider>
  );
};

export default App;
