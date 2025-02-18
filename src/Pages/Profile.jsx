import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="w-full h-screen items-center py-10">
      <div className=" container mx-auto max-w-4xl  flex flex-col gap-6">
        {/* Picture  */}
        <div className="flex gap-5 border  items-center rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800">
          <div>
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="profile"
              className="w-24 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Adity Patil</p>
            <p>adity@gmail.com</p>
          </div>
        </div>

        {/* Info  */}

        <div className="border rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800">
          <div className="flex justify-between">
            <h1 className=" text-2xl font-semibold ">Profile Information</h1>

            <div>
              {isEdit ? (
                <button
                  className="btn bg-blue-btn hover:bg-blue-btn-hover text-white"
                  onClick={() => setIsEdit(false)}
                >
                  <FaEdit className="text-lg" />
                  <span>Edit</span>
                </button>
              ) : (
                <button
                  className="btn bg-blue-btn hover:bg-blue-btn-hover text-white"
                  onClick={() => setIsEdit(true)}
                >
                  <FaSave className="text-lg" />
                  <span>Save</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 gap-x-10  mt-4 ">
            {/* Name */}
            <label className="form-control ">
              <div className="label">
                <span className="label-text text-base">Display Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md w-full"
              />
            </label>
            {/* Profession */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-base">Profession</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md w-full"
              />
            </label>
            {/* DOB */}
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text text-base">Date of Birth</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-md w-full "
              />
            </label>
            {/* Radio */}
            <div className=" ">
              <h1 className="my-3">Gender</h1>
              <div className="flex gap-8">
                <div className="flex  gap-3 items-center">
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                    defaultChecked
                  />
                  <span>Male</span>
                </div>
                <div className="flex  gap-3 items-center">
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                  />
                  <span>Female</span>
                </div>
                <div className="flex  gap-3 items-center">
                  <input
                    type="radio"
                    name="radio-3"
                    className="radio radio-secondary"
                  />
                  <span>other</span>
                </div>
              </div>
            </div>

            {/* Phone Number */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-base">Mobile Number</span>
              </div>
              <input
                type="number"
                placeholder="Mobile Number "
                className="input input-bordered input-md w-full "
              />
            </label>
            {/* About */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-base">About</span>
              </div>
              <input
                type="text"
                placeholder="About"
                className="input input-bordered input-md w-full "
              />
            </label>
          </div>
        </div>

        {/* Password */}

        <div className="border  rounded-xl shadow-lg p-8 bg-deep-navy border-gray-800">
          {/* Current Password */}
          <h1 className=" text-2xl font-semibold ">Password</h1>
          <div className="flex gap-x-10 mt-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-base">Current Password</span>
              </div>
              <input
                type="text"
                placeholder="Current Password"
                className="input input-bordered input-md w-full "
              />
            </label>
            {/* New Password */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-base">New Password</span>
              </div>
              <input
                type="text"
                placeholder="New Password"
                className="input input-bordered input-md w-full"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
