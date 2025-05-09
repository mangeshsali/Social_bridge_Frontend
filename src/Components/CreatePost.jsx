import React, { useState } from "react";
import { FaPencilAlt, FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import store from "../Redux/Store";

const CreatePost = () => {
  const Profile = useSelector((store) => store.Profile?.profile);
  return (
    <div className="border flex flex-col gap-2 rounded-md p-4 border-gray-800 max-w-2xl">
      <div className=" flex  gap-4 ">
        <img
          src={Profile}
          className="w-[50px]  h-[50px] object-contain rounded-full"
        />

        <div className="  w-full flex flex-col gap-2">
          <p className=" text-gray-400">Whats your Mind</p>

          <div className="  flex  justify-between">
            <div className="flex gap-5 text-lg cursor-pointer   items-center">
              <MdOutlinePostAdd />
              <FaPencilAlt />
              <FaVideo />
              <IoMdPhotos />
            </div>
            <button className="btn btn-sm bg-blue-btn hover:bg-blue-btn-hover">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
