import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import CreatePostPOPUP from "../../Popup/CreatePostPOPUP";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";

const Posts = () => {
  const [createPostPopup, setCreatePopstPopup] = useState(false);
  const [UserPostData, setUserPostData] = useState([]);

  const GETUserPost = async () => {
    try {
      const res = await axios.get(REACT_APP_BASE_URL + "/post", {
        withCredentials: true,
      });
      setUserPostData(res.data.posts);
    } catch (error) {
      console.log(error.message);
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETUserPost();
  }, []);
  return (
    <div className=" flex flex-col ">
      <div className="flex  justify-end">
        <button
          className=" btn-sm bg-white text-gray-800 font-semibold rounded-lg "
          onClick={() => setCreatePopstPopup(true)}
        >
          + Create Post
        </button>
      </div>

      {createPostPopup && (
        <CreatePostPOPUP setCreatePopstPopup={setCreatePopstPopup} />
      )}
      <div className="p-6 space-y-4">
        {UserPostData &&
          UserPostData.map((post) => {
            return <PostCard postData={post} />;
          })}
      </div>
    </div>
  );
};

export default Posts;
