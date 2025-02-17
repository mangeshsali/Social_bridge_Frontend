import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../envSample";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/Slices/ProfileSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const UserData = useSelector((store) => store.Profile);
  // const FetchProfile = async () => {
  //   try {
  //     const res = await axios.get(REACT_APP_BASE_URL + "/profile");
  //     dispatch(addUser(res.data));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   FetchProfile();
  // }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
