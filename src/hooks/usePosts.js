import React, { useState, useEffect } from "react";
import { Ink } from "../contracts/Ink";

export const usePosts = () => {
  const inkContract = useInkContract();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await inkContract.getPosts(0, 100);
      setPosts(posts);
    }

    fetchPosts();
  }, [inkContract]);

  return { posts };
};
