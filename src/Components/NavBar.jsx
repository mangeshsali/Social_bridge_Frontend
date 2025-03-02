import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const NavBar = () => {
  const ProfileData = useSelector((store) => store.Profile);

  const { firstName, profile } = ProfileData || {};

  return (
    <div>
      <div className="navbar glass">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Social Bridge</a>
        </div>
        <div className=" mr-4 flex gap-4">
          <p className=" font-semibold text-lg">{`Welcome ${firstName}`}</p>

          <Link to="/profile">
            <img
              alt="Tailwind CSS Navbar component"
              src={profile}
              className="rounded-full object-cover w-12 h-12 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
