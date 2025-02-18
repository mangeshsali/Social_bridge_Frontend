import React from "react";
import LoginForm from "../Components/LoginForm";
import BannerImg from "/assests/Main_banner.webp";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="bg-black bg-opacity-20 h-full w-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
