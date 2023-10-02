import { formatEther } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";

const Post = ({ post }) => {
  return (
    <div className="bg-white w-[30%] sm:max-w-sm border-2 border-blue-200 shadow-lg rounded-xl overflow-hidden py-8">
            <Link to={`/post/${post.id}`}>
                <div className="px-6 py-4">
                    <h2 className="text-2xl text-blue-400 font-semibold mb-5">
                        {post.content}
                    </h2>
                    <p className="mt-2 font-bold text-gray-500">
                        Time posted - {formatDate(post?.timePosted)}
                    </p>
                    <p className="mt-2 font-bold text-gray-500">
                        Tips Recieved - {formatEther(post?.tips)} INK
                    </p>
                    <p className="mt-2 font-bold text-gray-500">
                        Post Made By - {post?.poster}
                    </p>
                    )}
                </div>
            </Link>
        </div>
  );
};

export default Post;
