import axios from "axios";
import React, { useState } from "react";
import { REACT_APP_BASE_URL } from "../../envSample";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "./Loader";
const SignUp = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({});
  const [isLoader, setIsLoader] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const POSTSignUp = async (form) => {
    try {
      const res = await axios.post(REACT_APP_BASE_URL + "/signup", form, {
        withCredentials: true,
      });
      toast.success("Account Created Succefully");
      setIsLogin(true);
      setIsLoader(false);
      console.log("res", res.data);
    } catch (error) {
      console.log(error.message);
      setIsLoader(false);
      toast.error(error.message);
    }
  };

  const SubmitHandler = () => {
    const form = new FormData();

    for (const data in formData) {
      form.append(data, formData[data]);
    }
    setIsLoader(true);
    POSTSignUp(form);
  };

  const OnchangeHandler = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen items-center">
      <div className="card shadow-xl bg-deep-navy">
        <div className="card-body flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input input-bordered p-2 rounded-lg "
              onChange={(e) => OnchangeHandler(e)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered p-2 rounded-lg "
              onChange={(e) => OnchangeHandler(e)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered p-2 rounded-lg  col-span-2"
              onChange={(e) => OnchangeHandler(e)}
            />

            <label className="input input-bordered flex items-center col-span-2 justify-between">
              <input
                type={isShow ? "text" : "password"}
                placeholder="Password"
                name="password"
                className=""
                onChange={(e) => OnchangeHandler(e)}
              />
              <span onClick={() => setIsShow((prev) => !prev)}>
                {!isShow ? (
                  <AiOutlineEye className="text-xl cursor-pointer" />
                ) : (
                  <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                )}
              </span>
            </label>

            <input
              type="file"
              name="profile"
              className="file-input file-input-bordered p-2 rounded-lg  col-span-2"
              onChange={(e) => OnchangeHandler(e)}
            />
            {/* <input
              type="number"
              placeholder="Age"
              name="age"
              className="input input-bordered p-2 rounded-lg "
              onChange={(e) => OnchangeHandler(e)}
            />

            <select
              name="gender"
              className="select select-bordered p-2 rounded-lg "
              onChange={(e) => OnchangeHandler(e)}
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select> */}
          </div>

          <button
            className={`btn ${
              isLoader ? "bg-blue-500" : "bg-blue-600"
            } hover:bg-blue-700 text-white font-semibold text-lg rounded-lg py-2`}
            onClick={SubmitHandler}
            disabled={isLoader}
          >
            {isLoader ? <Loader /> : "Sign Up"}
          </button>

          <p className="text-center text-white">
            Already Registered?
            <span
              className="text-blue-600 underline cursor-pointer ml-1"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              Sign In Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
