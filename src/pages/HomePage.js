import React from "react";
// import { UserContext } from "../context/UserContext";
// import { InkContext } from "../context/InkContext";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

const Homepage = () => {
  // const inkContract = useContext(InkContext); // Use useContext to access InkContext
  // const user = useContext(UserContext); // Use useContext to access UserContext

  // Get all posts from the Ink smart contract
  // const posts = inkContract.getPosts(0, 100);

  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Homepage;
