import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";

const ProjectCards = (props) => {
  return (
    <div className=" border border-gray-700 rounded-md flex justify-between items-center p-4 cursor-pointer">
      <div>
        <p className=" text-lg font-medium">Project Name</p>
        <p className=" text-sm text-gray-400">Short Description</p>
      </div>
      <div className="flex  gap-4">
        <button className=" btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
          <span>
            <RxExternalLink />
          </span>
          Live
        </button>
        <button className=" btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
          <span>
            <FaGithub />
          </span>
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
