import React from "react";
import { useInkContract, useUser } from "./contexts";
import { PostList } from "./components/PostList";

const Homepage = () => {
  const inkContract = useInkContract();
  const user = useUser();

  // Get all posts from the Ink smart contract
  const posts = inkContract.getPosts(0, 100);

  return (
    <div>
      <PostList posts={posts} user={user} />
    </div>
  );
};

export default Homepage;
