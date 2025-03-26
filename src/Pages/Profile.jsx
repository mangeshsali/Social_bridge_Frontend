import React, { Component, useRef, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { REACT_APP_BASE_URL } from "../../envSample";
import axios from "axios";
import BasicProfileInfo from "../Components/BasicProfileInfo";
import Projects from "../Components/Profile/Projects";
import Posts from "../Components/Profile/Posts";
import SocialConnect from "../Components/Profile/SocialConnect";
import ProfileTabs from "../Components/ProfileTabs";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  // const [InfoData, setInfoData] = useState();

  const [selectedImage, setSelectedImage] = useState(
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  );
  const ImageformData = new FormData();
  const FileRef = useRef();
  const OnChangeFile = (e) => {
    const File = e.target.files[0];
    if (File) {
      const ImageUrl = URL.createObjectURL(File);
      setSelectedImage(ImageUrl);
      ImageformData.append("profile", File);
    }
  };

  const ImageUpload = async () => {
    try {
      const resp = await axios.put(
        REACT_APP_BASE_URL + "/uploadprofile",
        ImageformData,
        {
          withCredentials: true,
        }
      );
      toast.success("Image Updated SucessFully");
    } catch (error) {
      console.log("Err", error.message);
      toast.error("Image Upload Filed");
    }
  };

  return (
    <div className="w-full space-y-8">
      <BasicProfileInfo />

      <ProfileTabs />
    </div>
  );
};

export default Profile;
