import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="max-w-[20%] border">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
