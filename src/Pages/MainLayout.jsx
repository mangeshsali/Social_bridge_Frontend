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
