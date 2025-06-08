import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ErrorHandling } from "../Utils/ErrorHandling";
import axios from "axios";
import PostCard from "../Components/Profile/PostCard";
import { REACT_APP_BASE_URL } from "../../envSample";
import { IoIosSend } from "react-icons/io";
import Comments from "../Components/PostsDetails/Comments";
import Likes from "../Components/PostsDetails/Likes";

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [currentTab, setCurrentTab] = useState("Comments");
  const [latestComment, setLatestComment] = useState(null);
  const [comment, setComment] = useState("");

  const PostComments = async (id) => {
    try {
      const res = await axios.post(
        REACT_APP_BASE_URL + "/comment/" + id,
        { comment },
        {
          withCredentials: true,
        }
      );
      setLatestComment(res.data.comment);
      setComment("");
      console.log("res", res.data);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const CommentHandler = (id) => {
    PostComments(id);
  };

  const { postId } = useParams();

  const GETPostDetails = async () => {
    try {
      const res = await axios.get(`${REACT_APP_BASE_URL}/post/${postId}`, {
        withCredentials: true,
      });
      setPost(res.data.posts);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  console.log("Posts", post);
  useEffect(() => {
    GETPostDetails();
  }, []);

  return (
    <div className="max-w-2xl">
      <PostCard postData={post} />

      <div className="flex gap-2 items-center w-full px-2 py-4">
        <input
          type="text"
          placeholder={`Comment`}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          onKeyDown={(e) => (e.key === "Enter" ? CommentHandler(postId) : null)}
          className="w-full px-3 input-sm py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          className=" px-2 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => CommentHandler(postId)}
        >
          <IoIosSend className="text-2xl" />
        </button>
      </div>

      <div className="flex gap-6 justify-center mt-6">
        <h1
          className={`font-semibold cursor-pointer ${
            currentTab === "Comments"
              ? "underline underline-offset-8 decoration-slate-500"
              : ""
          }`}
          onClick={() => setCurrentTab("Comments")}
        >
          Comments
        </h1>
        <h1
          className={`font-semibold cursor-pointer ${
            currentTab === "Likes"
              ? "underline underline-offset-8 decoration-slate-500"
              : ""
          }`}
          onClick={() => setCurrentTab("Likes")}
        >
          Likes
        </h1>
      </div>

      <div>
        {currentTab === "Comments" ? (
          <Comments latestComment={latestComment} />
        ) : (
          <Likes />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
