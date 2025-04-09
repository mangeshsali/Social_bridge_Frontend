import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaGithub, FaSave } from "react-icons/fa";
import { REACT_APP_BASE_URL } from "../../../envSample";
import GithubRepo from "./GithubRepo";
import toast from "react-hot-toast";
import { ErrorHandling } from "../../Utils/ErrorHandling";
import { BiUnlink } from "react-icons/bi";

const SocialConnect = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [formData, setFormData] = useState({
    githubLink: "https://github.com/mangeshsali",
  });

  const OnchangeUserHandler = (e) => {
    setFormData({ githubLink: e.target.value });
  };
  const SaveHandler = async () => {
    try {
      const resp = await axios.post(
        REACT_APP_BASE_URL + "/socialgithub",
        formData,
        { withCredentials: true }
      );
      setGithubData(resp.data.Repo);
      toast.success("Github Successfully Connected");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  const GETGithubData = async () => {
    try {
      const resp = await axios.get(REACT_APP_BASE_URL + "/socialgithub", {
        withCredentials: true,
      });
      if (resp.status === 201) {
        setGithubData(resp.data);
      }
    } catch (error) {
      console.log(error.message);
      ErrorHandling(error);
    }
  };

  const DeleteGithub = async () => {
    try {
      const resp = await axios.delete(REACT_APP_BASE_URL + "/socialgithub", {
        withCredentials: true,
      });
      setGithubData(null);
      toast.success("UnLink Account Successfully");
    } catch (error) {
      ErrorHandling(error);
    }
  };

  useEffect(() => {
    GETGithubData();
  }, []);
  return (
    <div className="w-full px-6 ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className=" flex justify-between w-full">
          <div className="flex items-center gap-3 text-xl font-semibold ">
            <FaGithub />
            GitHub
          </div>

          {githubData && (
            <div
              className=" btn-sm bg-white text-gray-800  cursor-pointer font-semibold rounded-lg flex items-center "
              onClick={() => DeleteGithub()}
            >
              <BiUnlink className="text-lg" />
              UnLink Account
            </div>
          )}
        </div>
      </div>

      {/* Input Field */}

      {!githubData ? (
        <div className="form-control w-[70%]  flex items-start  gap-4 flex-row justify-center">
          <div className="flex-1  items-center">
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
                value={formData.githubLink}
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
          <button className="btn btn-primary" onClick={SaveHandler}>
            Submit
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p>Contributions</p>
          <div className="border flex justify-center py-6 rounded-lg border-gray-700">
            {githubData && githubData.githubContribution && (
              <img
                src={githubData.githubContribution}
                alt="github-contribution"
                className="github-chart"
              />
            )}
          </div>

          <p>Recent Repo</p>
          <div className="grid grid-cols-2 gap-y-4">
            {githubData &&
              githubData?.repoData?.map((github) => {
                return <GithubRepo githubData={github} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialConnect;
