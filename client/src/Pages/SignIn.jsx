import React, { useState } from "react";
import { CiAt } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../redux/user/userSlice";
import OAuth from "../components/GoogleOAuth";
import FbOAuth from "../components/FbOAuth";

export default function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Handles form data on input change.
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send form data to server
    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(loginFailed(data.message));
        return;
      }
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailed(error.message));
    }
  };

  return (
    <div className="flex flex-col my-10 justify-center items-center p-2">
      <h1 className="mb-10 text-2xl font-semibold">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-transparent border-2 border-black p-8 md:w-[450px] rounded-lg font-sans"
      >
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Email</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <CiAt className="" />
            <input
              placeholder="Enter your Email"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Password</label>
          <div className="inputForm border border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <IoLockClosedOutline />

            <input
              placeholder="Enter your Password"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="bg-[#151717] w-full h-[50px] rounded-xl text-white">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <div className="text-center text-xs text-red-700 font-medium">
          {error}
        </div>
        <p className="p text-center">
          Don't have an account?{" "}
          <Link
            to={"/signUp"}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>

        <div className="border-b-2 border-gray-300"></div>

        <p className="text-center">Or With</p>

        <div className="  flex justify-around gap-4">
          <OAuth />
          <FbOAuth />
        </div>
      </form>
    </div>
  );
}
