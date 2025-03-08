import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { REACT_APP_BASE_URL } from "../../envSample";
import axios from "axios";
import Loader from "../Components/Loader";

const EditProfilePOPUP = ({ setIsEdit, profileData }) => {
  const { firstName, lastName, location, skills, bio, about } =
    profileData || {};
  const [currentSkill, setCurrentSkills] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [profile, setProfile] = useState({
    firstName,
    lastName,
    bio,
    location,
    skills: [],
    about,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (e) => {
    setCurrentSkills(e.target.value);
  };

  const addSkills = () => {
    if (!profile.skills.includes(currentSkill)) {
      setProfile((prev) => {
        return {
          ...prev,
          skills: [...profile.skills, currentSkill],
        };
      });

      setCurrentSkills("");
    } else {
      setCurrentSkills("");
      toast.error("Already Present");
    }
  };

  const removeSkills = (skill) => {
    const UpdatedSkills = profile.skills.filter((tech) => tech !== skill);
    setProfile((prev) => ({ ...prev, skills: UpdatedSkills }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    POSTUpdateProfile();
  };

  const POSTUpdateProfile = async () => {
    try {
      const resp = await axios.put(
        REACT_APP_BASE_URL + "/updateinfo",
        profile,
        { withCredentials: true }
      );

      setIsLoading(false);
      toast.success("Update Successfully");
    } catch (error) {
      console.log(error.message);
      setIsEdit(false);
      setIsLoading(false);
      toast.error(error.message);
    }
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
          {/* <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={profile.email}
            disabled={true}
          /> */}

          {/* Skills */}
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill"
                name="skills"
                className="input input-bordered w-full"
                value={currentSkill}
                onChange={handleSkillChange}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={addSkills}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-primary cursor-pointer"
                  onClick={() => removeSkills(skill)}
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
            <button
              type="submit"
              className={`btn ${
                isLoading ? "bg-blue-500" : "bg-blue-600"
              } hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-2`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePOPUP;
