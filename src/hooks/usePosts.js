import { useState, useEffect } from "react";
import { useInkContract } from "./useInkContract.js";
import { useConnection } from "../context/connection";
import { getInkContractWithProvider } from "../utils";
// import { inkContractAddress } from "../constants/addresses";

export const usePosts = () => {
  const inkContract = useInkContract();
  const { provider } = useConnection();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postCount = await inkContract.postIndex();

        const fetchedPosts = [];

        for (let i = 1; i <= postCount; i++) {
          const post = await inkContract.getPost(i);

          const postDetail = {
            id: post.id.toNumber(),
            poster: post.poster,
            content: post.content,
            timePosted: post.timePosted.toNumber(),
            tips: post.tips.toNumber(),
          };

          fetchedPosts.push(postDetail);
        }

        setPosts(fetchedPosts.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [inkContract]);

  useEffect(() => {
        // Listen for event
        const handleNewPostEvent = (id, owner, timePosted) => {
            setPosts([
                {
                    id,
                    owner,
                    timePosted,
                },
                ...posts,
            ]);
        };
        const contract = getInkContractWithProvider(provider);
        contract.on("createPost", handleNewPostEvent);

        return () => {
            contract.off("createPost", handleNewPostEvent);
        };
    }, [posts, provider]);

  return { posts };
};
