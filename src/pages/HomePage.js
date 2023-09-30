import React from "react";
import { InkContext, UserContext } from "../context";
import { PostList } from "../components/PostList";

const Homepage = () => {
  const inkContract = InkContext();
  const user = UserContext();

  // Get all posts from the Ink smart contract
  const posts = inkContract.getPosts(0, 100);

  return (
    <div>
      <PostList posts={posts} user={user} />
    </div>
  );
};

export default Homepage;
