import React from "react";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

const PostCard = ({ postData }) => {
  const { post, Image, Like, Comment, userId, isLike } = postData || {};
  const { lastName, firstName, bio, profile } = userId || {};

  console.log("single", postData);
  return (
    <div className="flex flex-col gap-4 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 max-w-2xl w-full text-white">
      {/* Profile */}
      <div className="flex gap-4 items-center">
        <img
          src={profile}
          className="w-12 h-12 rounded-full object-cover border border-gray-700"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold">
            {firstName + " " + lastName}
          </h1>
          <p className="text-gray-400 text-xs flex gap-1 items-center">
            {bio}
            <span className="flex gap-1 text-xs">
              • 5m <IoEarthSharp />
            </span>
          </p>
        </div>
      </div>

      {/* Caption */}
      <p className="text-sm text-gray-300">{post}</p>

      {/* Image */}
      {Image && (
        <div className=" border border-gray-700 flex rounded-md justify-center">
          <img src={Image} className="h-80 object-cover rounded-md" />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 items-center border-t border-gray-700 pt-3">
        <button className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition">
          {isLike ? <FaHeart className="text-red-500" /> : <FaRegHeart />}

          <span>{(Like && Like.length) || ""}</span>
        </button>
        <button className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition">
          <FaRegCommentDots />
          <span>{(Comment && Comment.length) || ""}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
