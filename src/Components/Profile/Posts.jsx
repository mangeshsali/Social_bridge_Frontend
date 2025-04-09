import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import CreatePostPOPUP from "../../Popup/CreatePostPOPUP";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";
import toast from "react-hot-toast";

const Posts = () => {
  const [createPostPopup, setCreatePopstPopup] = useState(false);
  const [UserPostData, setUserPostData] = useState([]);
  const [EditPost, setEditPost] = useState(null);

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

  const DeleteHandler = async (id) => {
    try {
      const resp = await axios.delete(REACT_APP_BASE_URL + `/post/${id}`, {
        withCredentials: true,
      });
      setUserPostData((prev) => prev.filter((post) => post._id != id));
      toast.success("Delete Sucessfully");
      console.log(resp.data);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const EditData = (post) => {
    setCreatePopstPopup(true);
    setEditPost(post);
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
        <CreatePostPOPUP
          setCreatePopstPopup={setCreatePopstPopup}
          refreshResult={GETUserPost}
          EditPost={EditPost}
        />
      )}
      <div className="p-6 space-y-4  items-center flex-col flex">
        {UserPostData &&
          UserPostData.map((post) => {
            return (
              <PostCard
                postData={post}
                DeleteHandler={DeleteHandler}
                EditData={EditData}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
