
import React, { useState } from "react";
import { useInkContract } from "./hooks/useInkContract";

const CreatePost = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inkContract = useInkContract();

  const handleSubmit = async () => {
    onSubmit(title, content);

    // Create the post using the Ink smart contract
    await inkContract.createPost(title, content);
  };

  return (
    <div>
      <h1>Create Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreatePost;
