import { useState, useEffect } from "react";
import useInkContract from "../hooks/useInkContract";

export const usePost = (postId) => {
  const inkContract = useInkContract();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const post = await inkContract.getPost(postId);
      setPost(post);
    }

    fetchPost();
  }, [inkContract, postId]);

  return { post };
};
