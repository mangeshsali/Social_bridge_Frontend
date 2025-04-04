import axios from "axios";
import React, { useState } from "react";
import { REACT_APP_BASE_URL } from "../../envSample";
import Cookies from "js-cookie";
import { addUser } from "../Redux/Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "./Loader";

const LoginForm = ({ setIsLogin }) => {
  const [isLoader, setIsLoader] = useState(false);

  const [formData, setFormData] = useState({
    email: "dummy@gmail.com",
    password: "Dummy@123",
  });
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const FormSubmit = async () => {
    try {
      const resp = await axios.post(REACT_APP_BASE_URL + "/login", formData, {
        withCredentials: true,
      });
      toast.success("Login SucessFully");
      setIsLoader(false);
      navigate("/feed");
      dispatch(addUser(resp.data));

      for (let detail in resp.data) {
        localStorage.setItem(detail, resp.data[detail]);
      }
    } catch (error) {
      setIsLoader(false);
      toast.error(error?.response?.data?.message);
      console.log("Err", error.response.data.message);
    }
  };
  const submitHandler = () => {
    setIsLoader(true);
    console.log(formData);
    FormSubmit();
  };

  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="card  shadow-xl  bg-base-100 text-white w-96">
        <div className="card-body flex flex-col gap-8">
          <h2 className="card-title">Sign In</h2>

          <div className="flex flex-col gap-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={(e) => OnChangeHandler(e)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={isShow ? "text" : "password"}
                className="grow"
                name="password"
                value={formData.password}
                onChange={(e) => OnChangeHandler(e)}
              />
              <span onClick={() => setIsShow((prev) => !prev)}>
                {!isShow ? (
                  <AiOutlineEye className="text-xl cursor-pointer" />
                ) : (
                  <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                )}
              </span>
            </label>
          </div>
          <button
            className={`btn ${
              isLoader ? "bg-blue-500" : "bg-blue-600"
            } hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-2`}
            onClick={submitHandler}
            disabled={isLoader}
          >
            {isLoader ? <Loader /> : "Sign In"}
          </button>

          <h1>
            New to Social Bridge?{" "}
            <span
              className=" text-blue-700 underline-offset-2 underline cursor-pointer"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              Sign Up Now{" "}
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
