import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";

export default function HomePage() {
  return (
    <>
      <div className=" flex flex-col md:items-center md:gap-20 md:justify-between  mt-14  max-w-6xl mx-auto">
        <div className=" text-center  flex flex-col gap-4 md:gap-8">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide ">
            Exotic minimal <br /> furniture.
          </h1>
          <h6 className="text-xs font-medium tracking-wide text-gray-500 ">
            Choose from a wide rage of well-crafted premium <br />
            quality wooden furniture pieces online.
          </h6>
          <div className="mt-3">
            <Link className="border-2 py-2 px-4 md:py-3.5 md:px-10  border-black bg-gray-900 shadow-black shadow-md text-white hover:bg-transparent hover:text-black font-medium transition-all ease-in-out">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
