import React, { useState } from "react";
// import PrimaryLogo from "../assets/second-Furniture-logo-rbg.png";
import { CgMenuRight } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Furniture", link: "/furniture" },
    { name: "Product", link: "/product" },
    { name: "Store", link: "/store" },
  ];

  return (
    <div className="shadow-sm shadow-slate-300 w-full  fixed top-0 left-0">
      <div className="md:flex flex items-center justify-between md:max-w-6xl md:mx-auto  bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-xl cursor-pointer flex items-center 
    text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          MODERNA
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menu ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-5 text-2xl">
          <IoBagOutline />
          <div
            onClick={() => setMenu(!menu)}
            className="   right-8 top-6 cursor-pointer md:hidden"
          >
            {menu ? <IoMdClose /> : <CgMenuRight />}
          </div>
        </div>
      </div>
    </div>
  );
}
