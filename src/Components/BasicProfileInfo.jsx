import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import EditProfilePOPUP from "../Popup/EditProfilePOPUP";
import { FaEdit } from "react-icons/fa";
import { TECH_ICONS_CDN } from "../../envSample";

const BasicProfileInfo = () => {
  const [isEdit, setIsEdit] = useState(false);

  const data = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
    "Redux",
  ];

  return (
    <div className="  p-4 flex flex-col gap-6 relative">
      <div className="  flex  flex-col  items-center gap-6">
        <div className="">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            className=" w-32 h-32 border rounded-full"
          />
        </div>

        <div className="  flex flex-col gap-4  items-center">
          <h1 className=" font-bold  text-xl">Mangesh Sali</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eius?
          </p>
          <div className="flex gap-6 ">
            <p className="flex items-center gap-2 cursor-pointer text-md font-semibold">
              <span>
                <FiUsers />
              </span>
              5 Connections
            </p>
            <p className="flex items-center gap-2 cursor-pointer text-md font-semibold">
              <span>
                <IoLocationOutline />
              </span>
              location
            </p>
            <p className="flex items-center gap-2 cursor-pointer text-md font-semibold">
              <span>
                <MdOutlineMail />
              </span>
              Email@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex  flex-col  mt-4 gap-8">
        <div className="flex gap-x-4 gap-y-3 flex-wrap justify-center">
          {data.map((skill, idx) => {
            return (
              <div
                className="rounded-xl py-1 px-3  border border-gray-600 flex gap-2 items-center justify-center"
                key={idx}
              >
                <img
                  src={TECH_ICONS_CDN + skill}
                  className="w-5 h-5"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <p className=" inline-block text-md font-medium ">{skill}</p>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-sm btn-primary absolute right-0 top-5"
          onClick={() => setIsEdit(true)}
        >
          <FaEdit className="text-lg " />
        </button>

        <div className=" flex flex-col gap-3">
          <h1 className=" font-bold text-md">About </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            maxime?
          </p>
        </div>
      </div>

      {isEdit && <EditProfilePOPUP setIsEdit={setIsEdit} />}
    </div>
  );
};

export default BasicProfileInfo;
