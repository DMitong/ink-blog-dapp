import React, { useState } from "react";
import { useInkContract } from "../hooks/useInkContract.js";
import CreatePost from "../components/CreatePost.js";

const CreatePostPage = () => {
  const [content, setContent] = useState("");
  const inkContract = useInkContract();

  const handleSubmit = async () => {
    await inkContract.createPost(content);
  };

  return (
    <div>
      <CreatePost
        content={content}
        onContentChange={(e) => setContent(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreatePostPage;
