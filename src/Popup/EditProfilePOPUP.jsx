import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";

const EditProfilePOPUP = ({ setIsEdit }) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: "",
    skills: [],
    about: "",
    skillInput: "",
  });

  const handleChange = (e) => {};

  const handleSkillChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", profile);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-deep-navy p-6 rounded-lg shadow-lg w-[500px] relative ">
        <h2 className="text-xl font-semibold my-6">Edit Profile</h2>

        <div
          className=" absolute top-4 right-4  cursor-pointer"
          onClick={() => setIsEdit((prev) => !prev)}
        >
          <IoMdCloseCircle className=" text-2xl" />
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First Name & Last Name */}
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered w-full"
              value={profile.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered w-full"
              value={profile.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bio */}
          <textarea
            name="bio"
            placeholder="Short bio..."
            className="textarea textarea-bordered w-full"
            rows="2"
            value={profile.bio}
            onChange={handleChange}
          ></textarea>

          {/* Location & Email */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full"
            value={profile.location}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={profile.email}
            onChange={handleChange}
            required
          />

          {/* Skills */}
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill"
                className="input input-bordered w-full"
                value={profile.skillInput}
                onChange={handleSkillChange}
              />
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-primary cursor-pointer"
                >
                  {skill} ✕
                </span>
              ))}
            </div>
          </div>

          {/* About */}
          <textarea
            name="about"
            placeholder="Tell us about yourself..."
            className="textarea textarea-bordered w-full"
            rows="3"
            value={profile.about}
            onChange={handleChange}
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-3">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePOPUP;
