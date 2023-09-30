import React, { useState } from "react";
import { useInkContract } from "./hooks/useInkContract";
import CreatePost from "./components/CreatePost";

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
