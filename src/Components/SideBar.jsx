import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import {
  FaFacebookMessenger,
  FaHome,
  FaSearch,
  FaUserAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { removeUser } from "../Redux/Slices/ProfileSlice";
import { Logout } from "../../envSample";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  const dispatch = useDispatch();
  const MenuData = [
    {
      title: "Home",
      link: "/feed",
      icons: <FaHome />,
    },
    {
      title: "Search",
      link: "/search",
      icons: <FaSearch />,
    },
    {
      title: "Request",
      link: "/request",
      icons: <FaUserPlus />,
    },
    {
      title: "Message",
      link: "/message",
      icons: <FaFacebookMessenger />,
    },

    {
      title: "Profile",
      link: "/profile",
      icons: <FaUserAlt />,
    },
    {
      title: "More",
      link: "/",
      icons: <CgDetailsMore />,
    },
  ];

  const LogoutFn = () => {
    Logout();
    dispatch(removeUser());
  };
  return (
    <div className="w-full bgdeep-navy border-r  border-gray-600  min-h-screen flex  flex-col gap-10 ">
      <div className="flex flex-col gap-10 mt-10 pl-6 ">
        {MenuData.map((menu) => {
          return (
            <Link to={menu.link}>
              <li className="flex gap-5 cursor-pointer text-lg  font-semibold items-center ">
                <span>{menu.icons}</span>
                {menu.title}
              </li>
            </Link>
          );
        })}
      </div>

      <div className=" pl-6">
        <li
          className="flex gap-5 cursor-pointer text-lg  font-semibold items-center "
          onClick={() => LogoutFn()}
        >
          <span>
            <IoLogOutOutline className="text-2xl" />
          </span>
          Logout
        </li>
      </div>
    </div>
  );
};

export default SideBar;
