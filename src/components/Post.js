import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.content}</p>
    </li>
  );
};

export default Post;
