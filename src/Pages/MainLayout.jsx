import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Components/SideBar";

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
      <div className="flex gap-8">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
