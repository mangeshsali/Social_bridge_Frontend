import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router";

const ProjectCards = ({ Project }) => {
  const { projectName, projectHeadline, projectGithub, projectLink } =
    Project || {};

  return (
    <div className=" border border-gray-700 rounded-md flex justify-between items-center p-4 cursor-pointer">
      <div>
        <p className=" text-lg font-medium">{projectName}</p>
        <p className=" text-sm text-gray-400">{projectHeadline}</p>
      </div>
      <div className="flex  gap-4">
        <Link to={projectLink} target="_blank">
          <button className=" btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
            <span>
              <RxExternalLink />
            </span>
            Live
          </button>
        </Link>

        <Link to={projectGithub} target="_blank">
          <button className=" btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
            <span>
              <FaGithub />
            </span>
            Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
