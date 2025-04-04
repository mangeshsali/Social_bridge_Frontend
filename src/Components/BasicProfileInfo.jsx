import React, { useEffect, useRef, useState } from "react";
import { FiUsers } from "react-icons/fi";
import {
  IoCameraOutline,
  IoCameraSharp,
  IoLocationOutline,
} from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import EditProfilePOPUP from "../Popup/EditProfilePOPUP";
import { FaEdit } from "react-icons/fa";
import { REACT_APP_BASE_URL, TECH_ICONS_CDN } from "../../envSample";
import toast from "react-hot-toast";
import axios from "axios";
import { ErrorHandling } from "../Utils/ErrorHandling";
import ConnectionPOPUP from "../Popup/ConnectionPOPUP";

const BasicProfileInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const fileRef = useRef();

  const [profileData, setProfileData] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [isConnectionOpen, setIsconnectionOpen] = useState(false);

  const {
    firstName,
    lastName,
    email,
    location,
    bio,
    about,
    profile,
    skills,
    connection,
  } = profileData || {};

  const GETProfileInfo = async () => {
    try {
      const resp = await axios.get(REACT_APP_BASE_URL + "/profile", {
        withCredentials: true,
      });
      setProfileData(resp.data);
      console.log("res", resp.data);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const PUTProfileUpdate = async (formData) => {
    try {
      const res = await axios.put(
        REACT_APP_BASE_URL + "/uploadprofile",
        formData,
        {
          withCredentials: true,
        }
      );

      toast.success("Profile Updated Suceessfully");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETProfileInfo();
  }, []);

  const fileonChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile", file);
      PUTProfileUpdate(formData);
      setUpdatedProfile(URL.createObjectURL(file));
    }
  };

  const fileClickHandler = () => {
    fileRef.current.click();
  };

  // console.log("df", updatedProfile);

  return (
    <div className=" flex flex-col gap-6 relative">
      <div className="  flex  flex-col  items-center gap-6">
        <div className=" relative">
          <img
            src={updatedProfile || profile}
            className=" w-32 h-32 border rounded-full object-cover"
          />
          <input
            type="file"
            onChange={(e) => fileonChange(e)}
            className="hidden"
            ref={fileRef}
          />
          <div
            className=" absolute text-3xl font-semibold right-3  bottom-0 cursor-pointer"
            onClick={fileClickHandler}
          >
            <IoCameraSharp className="text-gray-100 " />
          </div>
        </div>

        <div className="  flex flex-col gap-4  items-center">
          <h1 className=" font-bold  text-xl">{firstName + " " + lastName}</h1>
          <p>{bio}</p>
          <div className="flex gap-6 ">
            <p
              className="flex items-center gap-2 cursor-pointer text-md font-semibold"
              onClick={() => setIsconnectionOpen(true)}
            >
              <span>
                <FiUsers />
              </span>
              {connection?.length || 0} Connections
            </p>
            <p className="flex items-center gap-2 cursor-pointer text-md font-semibold">
              <span>
                <IoLocationOutline />
              </span>
              {location}
            </p>
            <p className="flex items-center gap-2 cursor-pointer text-md font-semibold">
              <span>
                <MdOutlineMail />
              </span>
              {email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex  flex-col  mt-4 gap-8">
        <div className="flex gap-x-4 gap-y-3 flex-wrap justify-center">
          {skills?.length > 0 &&
            skills.map((skill, idx) => {
              return (
                <div
                  className="rounded-xl py-1 px-3  border border-gray-600 flex gap-2 items-center justify-center"
                  key={idx}
                >
                  <img
                    src={TECH_ICONS_CDN + skill}
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  <p className=" inline-block text-md font-medium ">{skill}</p>
                </div>
              );
            })}
        </div>

        <button
          className="btn btn-sm btn-primary absolute right-0 top-5"
          onClick={() => setIsEdit(true)}
        >
          <FaEdit className="text-lg " />
        </button>

        <div className=" flex flex-col gap-3">
          <h1 className=" font-bold text-md">About </h1>
          <p>{about}</p>
        </div>
      </div>

      {isEdit && (
        <EditProfilePOPUP setIsEdit={setIsEdit} profileData={profileData} />
      )}

      {isConnectionOpen && (
        <ConnectionPOPUP setIsconnectionOpen={setIsconnectionOpen} />
      )}
    </div>
  );
};

export default BasicProfileInfo;
