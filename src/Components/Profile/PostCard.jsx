import React, { useState, useRef } from "react";
import {
  FaEdit,
  FaHeart,
  FaRegCommentDots,
  FaRegHeart,
  FaTrashAlt,
} from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { RxDotsVertical } from "react-icons/rx";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";
import useClickOutside from "../../Utils/useClickOutside";

const PostCard = ({ postData, DeleteHandler, EditData }) => {
  const [currentPost, setCurrentPost] = useState(postData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { post, Image, Like, Comment, userId, isLike, _id } = currentPost || {};
  const { lastName, firstName, bio, profile } = userId || {};

  const POSTLike = async (id) => {
    try {
      const resp = await axios.post(
        REACT_APP_BASE_URL + "/postlike/" + id,
        null,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const LikeHandler = (id) => {
    setCurrentPost((prev) => ({ ...prev, isLike: !isLike }));
    POSTLike(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useClickOutside(menuRef, toggleMenu);

  return (
    <div className="relative flex flex-col z-0 gap-4 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900 max-w-2xl w-full text-white">
      {/* Profile */}
      <div className=" flex justify-between">
        <div className="flex gap-4 items-center">
          <img
            src={profile}
            className="w-12 h-12 rounded-full object-cover border border-gray-700"
          />
          <div className="flex flex-col gap-y-1">
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

        {/* Actions Menu Button */}
        <button
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <RxDotsVertical size={20} />
        </button>
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-1 mt-0 w-40 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <ul className="text-gray-700">
              {/* Edit Action */}
              <li
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center gap-2"
                onClick={() => EditData(currentPost)}
              >
                <FaEdit />
                Edit
              </li>

              {/* Delete Action */}
              <li
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center gap-2"
                onClick={() => DeleteHandler(_id)}
              >
                <FaTrashAlt />
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Caption */}
      <p className="text-sm text-gray-300">{post}</p>

      {/* Image */}
      {Image && (
        <div className="border border-gray-700 flex rounded-md justify-center">
          <img src={Image} className="h-80 object-cover rounded-md" />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 items-center border-t border-gray-700 pt-3">
        {/* Like Button */}
        <button
          className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition"
          onClick={() => LikeHandler(_id)}
        >
          {isLike ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span>{(Like && Like.length) || ""}</span>
        </button>

        {/* Comment Button */}
        <button className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition">
          <FaRegCommentDots />
          <span>{(Comment && Comment.length) || ""}</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
