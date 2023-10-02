import React, { useState } from "react";

export const TipButton = ({ onTipChange, onTip }) => {
  const [tipAmount, setTipAmount] = useState(0);

  const handleTipChange = (e) => {
    onTipChange(e);
    setTipAmount(e.target.value);
  };

  const handleTip = () => {
    onTip();
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Tip amount"
        value={tipAmount}
        onChange={handleTipChange}
      />
      <button onClick={handleTip}>Tip</button>
    </div>
  );
};

export function handleTipChange(e) {
  // Function code
}
