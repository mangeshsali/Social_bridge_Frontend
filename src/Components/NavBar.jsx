import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
      <div className="navbar glass">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Social Bridge</a>
        </div>
        <div className=" mr-4 flex gap-4">
          <p className=" font-semibold text-lg">Welcome Mangesh</p>

          <Link to="/profile">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="rounded-full object-cover w-12 h-12 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
