import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ErrorHandling } from "../Utils/ErrorHandling";
import axios from "axios";
import PostCard from "../Components/Profile/PostCard";
import { REACT_APP_BASE_URL } from "../../envSample";

const PostDetails = () => {
  const { postId } = useParams();
  console.log("id", postId);

  const [post, setPost] = useState(null);

  const GETPostDetails = async () => {
    try {
      const res = await axios.get(
        REACT_APP_BASE_URL + "/postdetails/" + postId,
        {
          withCredentials: true,
        }
      );
      setPost(res.data);
      console.log("res", res.data);
    } catch (error) {
      ErrorHandling(error);
    }
  };
  useEffect(() => {
    GETPostDetails();
  }, []);
  return (
    <div>
      <div>
        <PostCard postData={postId} />
      </div>
    </div>
  );
};

export default PostDetails;
