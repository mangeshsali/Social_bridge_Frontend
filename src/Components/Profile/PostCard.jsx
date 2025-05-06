import React, { useState, useRef, useEffect } from "react";
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
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";
import { Link } from "react-router";

const PostCard = ({ postData, DeleteHandler, EditData }) => {
  const [currentPost, setCurrentPost] = useState(postData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { post, Image, likeCount, commentCount, userId, isLike, _id } =
    currentPost || {};
  const { lastName, firstName, bio, profile } = userId || {};
  const [LikeCountFE, setLikeCountFE] = useState(0);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCountFE, setCommentCountFE] = useState(0);

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

  const POSTComment = async (id) => {
    try {
      const resp = await axios.post(
        REACT_APP_BASE_URL + "/comment/" + id,
        { comment },
        {
          withCredentials: true,
        }
      );
      setComment("");
      toast.success("Comment Successfully");
      setIsCommentOpen(false);
      setCommentCountFE((prev) => prev + 1);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const LikeHandler = (id) => {
    setCurrentPost((prev) => ({ ...prev, isLike: !isLike }));

    setLikeCountFE((prev) => (isLike ? prev - 1 : prev + 1));
    // LikeCount > 0 ? setLikeCount((prev) => prev - 1) : setLikeCount(0);

    POSTLike(id);
  };

  const CommentHandler = (id) => {
    // setIsCommentOpen(!isCommentOpen);

    POSTComment(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useClickOutside(menuRef, toggleMenu);

  useEffect(() => {
    if (currentPost) {
      setLikeCountFE(likeCount);
      setCommentCountFE(commentCount);
    }
  }, []);

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

      <div className="flex justify-end gap-2 text-xs">
        <Link to={`/post/${_id}`}>
          <p className="cursor-pointer hover:underline-offset-4 hover:underline hover:decoration-blue-900">{`${LikeCountFE} Likes `}</p>
        </Link>
        <p className="cursor-pointer hover:underline-offset-4 hover:underline hover:decoration-blue-900">{`${commentCountFE} Comments`}</p>
      </div>
      {/* Actions */}
      <div className="flex gap-4 items-center border-t border-gray-700 pt-3">
        {/* Like Button */}
        <button
          className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition"
          onClick={() => LikeHandler(_id)}
        >
          {isLike ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-sm" />
          )}
          <span>{LikeCountFE || "0"}</span>
        </button>

        {/* Comment Button */}
        <button
          className="flex items-center gap-2 border px-3 py-1 rounded-lg border-gray-600 text-sm hover:bg-gray-700 transition"
          onClick={() => setIsCommentOpen(!isCommentOpen)}
        >
          <FaRegCommentDots />
          <span>{commentCountFE || "0"}</span>
        </button>
      </div>

      {isCommentOpen && (
        <div
          // onSubmit={CommentHandler(_id)}
          className="flex gap-2 items-center"
        >
          <input
            type="text"
            placeholder={`Comment`}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="w-full px-3 input-sm py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className=" px-2 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => CommentHandler(_id)}
          >
            <IoIosSend className="text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
