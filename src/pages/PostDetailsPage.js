import React, { useState, useEffect } from "react";
import { usePost } from "./hooks/usePost";
import PostDetail from "./components/PostDetail";

const PostDetailPage = ({ match }) => {
  const [post, setPost] = useState(null);
  const { fetchPost } = usePost();

  useEffect(() => {
    const postId = match.params.postId;
    fetchPost(postId).then((post) => setPost(post));
  }, [match]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
};

export default PostDetailPage;
