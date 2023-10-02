import React, { useState } from "react";
// import { useTipOnPost } from "./hooks/useTipOnPost";
import { TipButton, handleTipChange } from "./TipButton";

const PostDetail = ({ post }) => {
  const [tipAmount, setTipAmount] = useState(0);
  // const { tipOnPost } = useTipOnPost();

  const handleTip = () => {
    handleTipChange(post.id, tipAmount);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <TipButton
        onTipChange={(e) => setTipAmount(e.target.value)}
        onTip={handleTip}
      />
    </div>
  );
};

export default PostDetail;
