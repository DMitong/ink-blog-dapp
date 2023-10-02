import React from "react";
import { usePosts } from "../hooks/usePosts";
import Post from "./Post";

// export const PostList = ({ posts }) => {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </ul>
//   );
// };

const PostList = () => {
    const posts = usePosts();

    return (
        <div className="flex flex-wrap justify-center gap-10 px-5 py-10">
            {!!posts &&
                posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
        </div>
    );
};

export default PostList;
