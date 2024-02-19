import React from "react";
import { Link } from "react-router-dom";
import { PiOfficeChairDuotone } from "react-icons/pi";
import { LuSofa } from "react-icons/lu";
import { MdDesk, MdOutlineTableBar, MdTableRestaurant } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { BsBookshelf } from "react-icons/bs";

export default function ProductsSidebar() {
  return (
    <div className="bg-gray-300 h-screen flex flex-col items-center w-[20%]">
      <h1 className=" text-xl font-semibold py-8">Our Products</h1>

      <ul className=" flex flex-col w-full px-10 gap-4">
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <PiOfficeChairDuotone className="text-2xl" />
          <Link className="text-lg">All products</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <PiOfficeChairDuotone className="text-2xl" />
          <Link className="text-lg">Chairs</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <LuSofa className="text-2xl" />
          <Link className="text-lg">Sofas</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <MdOutlineTableBar className="text-2xl" />
          <Link className="text-lg">Tables</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <MdDesk className="text-2xl" />
          <Link className="text-lg">Desks</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <LiaBedSolid className="text-2xl" />
          <Link className="text-lg">Beds</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <BsBookshelf className="text-2xl" />
          <Link className="text-lg">Shelfs</Link>
        </li>
        <li className="border-2 border-gray-400 py-2 flex items-center justify-center gap-3 hover:bg-gray-600 hover:text-gray-50 transition-all ease-in-out cursor-pointer ">
          <MdTableRestaurant className="text-2xl" />
          <Link className="text-lg">Tv Stand</Link>
        </li>
      </ul>
    </div>
  );
}
