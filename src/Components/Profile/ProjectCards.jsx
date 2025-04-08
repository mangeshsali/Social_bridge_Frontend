import React, { useRef, useState } from "react";
import { FaEdit, FaGithub, FaSave, FaTrashAlt } from "react-icons/fa";
import { RxExternalLink, RxDotsVertical } from "react-icons/rx";
import { Link } from "react-router";
import useClickOutside from "../../Utils/useClickOutside";

const ProjectCards = ({ Project }) => {
  const { projectName, projectHeadline, projectGithub, projectLink } =
    Project || {};
  const menuRef = useRef(null); //

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle action menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useClickOutside(menuRef, toggleMenu);
  return (
    <div className="border border-gray-700 rounded-md flex justify-between items-center p-4 cursor-pointer">
      <div>
        <p className="text-lg font-medium">{projectName}</p>
        <p className="text-sm text-gray-400">{projectHeadline}</p>
      </div>

      <div className="flex gap-4 items-center relative">
        {/* Action Menu Button */}

        {/* Live Link Button */}
        <Link to={projectLink} target="_blank">
          <button className="btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
            <RxExternalLink />
            Live
          </button>
        </Link>

        {/* Github Link Button */}
        <Link to={projectGithub} target="_blank">
          <button className="btn-sm bg-blue-btn hover:bg-blue-btn-hover flex items-center gap-3 rounded-lg text-md font-semibold">
            <FaGithub />
            Github
          </button>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <RxDotsVertical size={20} />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <ul className="text-gray-700">
              {/* Edit Action */}
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center gap-2">
                <FaEdit />
                Edit
              </li>

              {/* Delete Action */}
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded-md flex items-center gap-2">
                <FaTrashAlt />
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
