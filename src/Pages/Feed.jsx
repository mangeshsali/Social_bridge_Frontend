import React, { useEffect, useState } from "react";
import PostCard from "../Components/Profile/PostCard";
import CreatePost from "../Components/CreatePost";
import CreatePostPOPUP from "../Popup/CreatePostPOPUP";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";

const Feed = () => {
  const [isPOPUP, setIsPOPUP] = useState(false);

  const [posts, setPosts] = useState([]);

  const GETFeed = async () => {
    try {
      const res = await axios.get(
        REACT_APP_BASE_URL + "/feed?limit=20&page=1",
        {
          withCredentials: true,
        }
      );
      setPosts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GETFeed();
  }, []);

  console.log("r", posts.posts);
  return (
    <div className="w-full min-h-screen  items-center flex">
      <div className="  w-full min-h-screen flex   flex-col ">
        <div onClick={() => setIsPOPUP(true)} className=" cursor-pointer">
          <CreatePost />
        </div>

        {!posts.posts ? (
          <div className="flex justify-center my-10">
            <p className="font-semibold text-lg">
              NO POSTS FOUND MAKE A CONNECTION FIRST
            </p>
          </div>
        ) : (
          posts.posts.map((post) => (
            <div key={post.id} className="mt-5">
              <PostCard postData={post} />
            </div>
          ))
        )}
      </div>
      {/* <div className=" bg-deep-navy h-screen w-[40%]"></div> */}

      {isPOPUP && (
        <CreatePostPOPUP
          setCreatePopstPopup={setIsPOPUP}
          refreshResult={GETFeed}
        />
      )}
    </div>
  );
};

export default Feed;
