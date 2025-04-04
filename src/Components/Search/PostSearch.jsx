import React from "react";
import PostCard from "../Profile/PostCard";

const PostSearch = ({ resultData }) => {
  return (
    <div className="  mt-8">
      {Array.isArray(resultData?.result) && resultData.result.length > 0 ? (
        <div className="flex flex-col gap-y-4">
          {resultData.result.map((post) => {
            return <PostCard key={post._id} postData={post} />;
          })}
        </div>
      ) : (
        <div className="my-4">
          <h1 className="text-md font-bold">Posts Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default PostSearch;
