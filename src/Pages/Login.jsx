import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import BannerImg from "/assests/Main_banner.webp";
import SignUp from "../Components/SignUp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="bg-black bg-opacity-20 h-full w-full">
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignUp setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
