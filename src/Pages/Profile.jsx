import React, { useRef, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { REACT_APP_BASE_URL } from "../../envSample";
import axios from "axios";

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

  const onSubmitHandler = () => {
    // FormSubmit();
  };

  return (
    <div className="w-full h-screen items-center py-10">
      <div className="container mx-auto max-w-4xl flex flex-col gap-6">
        {/* Picture */}
        <div className="flex gap-5 border items-center rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800 justify-between">
          <div className="flex gap-8 items-center">
            <img
              src={selectedImage}
              alt="profile"
              className="w-24 rounded-full object-cover h-24"
            />

            <div className="flex flex-col gap-2">
              <p>Adity Patil</p>
              <p>adity@gmail.com</p>
            </div>
          </div>

          <div>
            <input
              type="file"
              onChange={(e) => OnChangeFile(e)}
              className="hidden"
              ref={FileRef}
            />

            <button
              className=" btn bg-blue-btn hover:bg-blue-btn-hover"
              onClick={() => FileRef.current.click()}
            >
              Change Photo
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="border rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Profile Information</h1>
            <button
              className="btn bg-blue-btn hover:bg-blue-btn-hover text-white"
              onClick={() => setIsEdit(!isEdit)}
            >
              {isEdit ? (
                <FaEdit className="text-lg" />
              ) : (
                <FaSave className="text-lg" />
              )}
              <span>{isEdit ? "Edit" : "Save"}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5 gap-x-10 mt-4">
            {/* Name */}
            <label className="form-control">
              <div className="label">
                <span className="label-text text-base">Display Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                defaultValue="Amol Patil"
                className="input input-md w-full input-bordered"
                disabled={isEdit}
              />
            </label>
            {/* Profession */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Profession</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
            {/* DOB */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Date of Birth</span>
              </div>
              <input
                type="date"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
            {/* Gender */}
            <div>
              <h1 className="my-3">Gender</h1>
              <div className="flex gap-8">
                {["Male", "Female", "Other"].map((gender) => (
                  <div key={gender} className="flex gap-3 items-center">
                    <input
                      type="radio"
                      name="gender"
                      className="radio radio-secondary"
                      disabled={isEdit}
                    />
                    <span>{gender}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Phone Number */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Mobile Number</span>
              </div>
              <input
                type="number"
                placeholder="Mobile Number"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
            {/* About */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">About</span>
              </div>
              <input
                type="text"
                placeholder="About"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
          </div>
        </div>

        {/* Password */}
        <div className="border rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800">
          <h1 className="text-2xl font-semibold">Password</h1>
          <div className="flex gap-x-10 mt-4">
            {/* Current Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Current Password</span>
              </div>
              <input
                type="password"
                placeholder="Current Password"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
            {/* New Password */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">New Password</span>
              </div>
              <input
                type="password"
                placeholder="New Password"
                className="input input-bordered input-md w-full"
                disabled={isEdit}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
