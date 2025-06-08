import { ErrorHandling } from "../../Utils/ErrorHandling";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../envSample";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Likes = () => {
  const { postId } = useParams();
  const [likes, setLikes] = useState([]);
  console.log("id", postId);

  const GETLikes = async (postId) => {
    const res = await axios.get(`${REACT_APP_BASE_URL}/likes/${postId}`, {
      withCredentials: true,
    });
    console.log("response", res.data.likes);
    setLikes(res.data.likes);
    try {
    } catch (error) {
      console.log("error", error.message);
      ErrorHandling(error);
    }
  };
  useEffect(() => {
    GETLikes(postId);
  }, []);
  return (
    <div className="py-8 flex gap-3 flex-col">
      {likes.length === 0 && (
        <div className="text-center text-gray-500">
          No Likes yet. Be the first to Like!
        </div>
      )}

      {likes.map((info) => {
        const { firstName, lastName, bio, profile } = info.userId || {};
        return (
          <div
            className="flex justify-between items-center w-full p-4 gap-y-2 rounded-xl bg-deep-navy cursor-pointer"
            key={info._id}
          >
            <div className="flex gap-6 items-center">
              <div className="w-[40px] h-[40px]">
                <img
                  src={profile}
                  className="rounded-full object-cover"
                  alt={`${firstName} ${lastName}`}
                />
              </div>

              <div className="space-y-1">
                <h1 className="text-md">{`${firstName} ${lastName}`}</h1>
                <p className="text-xs text-gray-400">{bio}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Likes;
