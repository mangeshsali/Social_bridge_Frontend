import React, { useEffect, useState } from "react";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { REACT_APP_BASE_URL } from "../../../envSample";
import { useParams } from "react-router";
import axios from "axios";

const Comments = ({ latestComment }) => {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  const GETPostComments = async () => {
    try {
      const res = await axios.get(`${REACT_APP_BASE_URL}/comments/${postId}`, {
        withCredentials: true,
      });
      setComments(res.data.comments);
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    if (latestComment) {
      setComments((prevComments) => [latestComment, ...prevComments]);
    }
  }, [latestComment]);

  useEffect(() => {
    GETPostComments();
  }, []);

  console.log("latestComment", latestComment);

  return (
    <div className=" py-8">
      <div className="flex flex-col gap-3">
        {comments.length === 0 && (
          <div className="text-center text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        )}
        {comments &&
          comments.map((commentData, index) => {
            const {
              comment,
              userId: { firstName, lastName, profile, bio } = {},
            } = commentData;

            return (
              <div
                key={index}
                className="border rounded-lg p-2 border-gray-600"
              >
                <div className=" flex gap-3">
                  <img
                    src={profile}
                    alt={`${firstName} ${lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div className=" flex  gap-2 flex-col">
                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        {firstName} {lastName}
                      </h2>
                      <p className="text-[10px] text-gray-500">{bio}</p>
                    </div>
                    <p className="text-base text-white">{comment}</p>

                    <div className="flex gap-2 text-xs text-gray-500">
                      {/* <p className="text-sm text-gray-500">1h ago</p> */}
                      <p>Like</p> | <p>Reply</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
