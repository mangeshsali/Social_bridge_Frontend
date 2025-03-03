import React, { useState } from "react";
import PostCard from "./PostCard";
import CreatePostPOPUP from "../../Popup/CreatePostPOPUP";

const Posts = () => {
  const [createPostPopup, setCreatePopstPopup] = useState(false);
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
      <div className="p-6">
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
