import axios from "axios";
import React, { useState } from "react";
import { FaEdit, FaGithub, FaSave } from "react-icons/fa";
import { REACT_APP_BASE_URL } from "../../../envSample";
import GithubRepo from "./GithubRepo";

const SocialConnect = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [githubUserName, setGithubUserName] = useState("");
  const [githubURL, setGithubURL] = useState("");

  // ExtractUserName("https://github.com/Ayushparikh-code");

  const OnchangeUserHandler = (e) => {
    setGithubURL(e.target.value);
  };
  const SaveHandler = async () => {
    try {
      const resp = await axios.post(
        REACT_APP_BASE_URL + "/github/user=" + githubURL.split("/").at(-1),
        null,
        { withCredentials: true }
      );
      console.log(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <p className="flex items-center gap-3 text-xl font-semibold">
          <FaGithub />
          GitHub
        </p>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? (
            <FaSave className="text-lg" onClick={SaveHandler} />
          ) : (
            <FaEdit className="text-lg" />
          )}
        </button>
      </div>

      {/* Input Field */}

      {isEdit && (
        <div className="form-control w-1/2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              className="h-5 w-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              type="url"
              className="w-full"
              required
              disabled={!isEdit}
              value={githubURL}
              onChange={(e) => OnchangeUserHandler(e)}
              placeholder="Enter your GitHub profile URL"
              pattern="^(https?://)?(www\.)?github\.com/[a-zA-Z0-9-]+/?$"
              title="Must be a valid GitHub URL"
            />
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Must be a valid GitHub URL
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <p>64 Contributions</p>
        <div className="border flex justify-center py-6 rounded-lg border-gray-700">
          <img
            src="https://ghchart.rshah.org/mangeshsali"
            alt="github-contribution"
            className="github-chart"
          />
        </div>
        <p>Recent Repo</p>
        <GithubRepo />
      </div>
    </div>
  );
};

export default SocialConnect;
