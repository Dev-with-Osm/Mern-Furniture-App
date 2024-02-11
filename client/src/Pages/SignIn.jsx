import React from "react";
import { CiAt } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex flex-col mt-10 justify-center items-center p-2">
      <h1 className="mb-10 text-2xl font-semibold">Sign In</h1>
      <form className="flex flex-col gap-5 bg-transparent border-2 border-black p-8 md:w-[450px] rounded-lg font-sans">
        <div className="flex flex-col gap-4">
          <label className="text-black font-semibold">Email</label>
          <div className="inputForm border bg-transparent border-gray-300 rounded-xl flex items-center pl-4 h-[50px] transition duration-200 ease-in-out">
            <CiAt className="" />
            <input
              placeholder="Enter your Email"
              className="input ml-4 bg-transparent outline-none border-none w-full h-full"
              type="text"
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
            />
          </div>
        </div>

        <button className="bg-[#151717] w-full h-[50px] rounded-xl text-white">
          Sign In
        </button>

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
          <button className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2">
            <FcGoogle className="text-xl" />
            Google
          </button>
          <button className="flex items-center border-2 px-7 md:px-10 py-2 rounded-lg shadow-md font-semibold gap-2">
            <FaApple className="text-xl" />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
