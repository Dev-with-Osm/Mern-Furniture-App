import React, { useState } from "react";
import { CiAt } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send form data to server here
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError("Sign In failed ! Please check your credentials.");

        setLoading(false);
      } else {
        setLoading(false);
        setError(null);
        navigate("/signIn");
      }
    } catch (error) {
      setError("Sign In failed ! Please check your credentials.");
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col my-10 justify-center items-center p-2">
      <h1 className="mb-10 text-2xl font-semibold">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-transparent border-2 border-black p-8 md:w-[450px] rounded-lg font-sans"
      >
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Username</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <MdOutlineContactPage className="" />
            <input
              placeholder="Enter your name"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </div>
        </div>
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <div>
          <p className="text-center text-xs text-red-700 font-medium">
            {error}
          </p>
        </div>
        <p className="p text-center">
          Alredy have an account?{" "}
          <Link
            to={"/signIn"}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign In
          </Link>
        </p>

        <div className="border-b-2 border-gray-300"></div>

        <p className="text-center">Or With</p>

        <div className="  flex justify-around gap-4">
          <button
            type="button"
            className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2"
          >
            <FcGoogle className="text-xl" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2"
          >
            <FaApple className="text-xl" />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
