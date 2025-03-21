import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Components/SideBar";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";
import { addUser } from "../Redux/Slices/ProfileSlice";

const MainLayout = () => {
  // const dispatch = useDispatch();
  // const ProfileData = useSelector((store) => store.Profile);

  // const FetchProfile = async () => {
  //   try {
  //     const res = await axios.get(REACT_APP_BASE_URL + "/profile", {
  //       withCredentials: true,
  //     });
  //     dispatch(addUser(res.data));
  //     console.log("profdf", res.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   FetchProfile();
  // }, []);
  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto w-[1120px] overflow-s">
        <div className="flex w-full">
          <div className="w-[20%] sticky top-0 h-sreen">
            <SideBar />
          </div>
          <div className="w-[80%] p-10  overflow-y-scroll h-screen thin-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
