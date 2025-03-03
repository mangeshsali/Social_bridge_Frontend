import React from "react";
import { FaJs } from "react-icons/fa";

const GithubRepo = () => {
  return (
    <div className="cursor-pointer border rounded-lg border-gray-700 w-[280px] h-[90px] justify-center px-4 flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-slate-700 ">
      <p>Repository Name</p>
      <div className="flex justify-between">
        <p className="flex items-center text-sm gap-2 text-gray-400">
          <span className="text-yellow-300">
            <FaJs />
          </span>
          Language
        </p>
        <p className="text-sm text-gray-400">30 Oct 2024</p>
      </div>
    </div>
  );
};

export default GithubRepo;
