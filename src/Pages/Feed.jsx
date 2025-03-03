import React from "react";
import FeedCard from "../Components/FeedCard";

const Feed = () => {
  return (
    <div className="w-full min-h-screen  items-center flex justify-between">
      <div className="  w-full min-h-screen flex items-center justify-center">
        <FeedCard />
      </div>
      <div className=" bg-deep-navy h-screen w-[40%]"></div>
    </div>
  );
};

export default Feed;
