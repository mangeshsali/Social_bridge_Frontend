import React from "react";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

const PostCard = () => {
  return (
    <div className="border rounded-md border-gray-700">
      <div className="flex  flex-col gap-4  p-6">
        {/* Profile */}
        <div className="  flex gap-4 justify-between">
          <div className="flex  gap-4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h1 className=" text-sm">Mangesh Sali</h1>
              <p className="text-gray-400 text-xs flex gap-3">
                Frontend Developer
                <span className="flex  gap-1 text-md">
                  5m •
                  <IoEarthSharp className="my-auto" />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className=" flex flex-col gap-6 items-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            quam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit quas exercitationem aspernatur fugiat, aperiam veritatis ut
            ipsam cum alias placeat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis et eius quos tenetur quod pariatur
            repellendus dicta perspiciatis delectus at provident reprehenderit.
          </p>

          {/* Image */}
          <div className=" w-[100%] h-[300px] border rounded-md border-gray-800">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-full h-full object-contain"
            />
          </div>

          <div className=" flex gap-2  w-full">
            <div className="flex items-center gap-2 border px-2 rounded-lg border-gray-600 py-1 text-md cursor-pointer">
              <FaHeart />
              <p>4</p>
            </div>
            <div className="flex items-center gap-2 border px-2 rounded-lg border-gray-600 py-1 text-md cursor-pointer">
              <FaRegCommentDots />

              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
