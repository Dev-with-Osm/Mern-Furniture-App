import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleMenu = () => setClick(!click);

  const content = (
    <div
      className={`md:hidden block absolute top-16 w-full left-0 right-0 backdrop-filter backdrop-blur-xl transition-all ${
        click ? "ease-in" : "ease-out"
      }`}
    >
      <ul className="text-center p-20 text-lg">
        <Link to={"/"}>
          <li className="my-4 py-4 border-b border-slate-400">Home</li>
        </Link>
        <Link to={"/furniture"}>
          <li className="my-4 py-4 border-b border-slate-400">Furniture</li>
        </Link>
        <Link to={"products"}>
          <li className="my-4 py-4 border-b border-slate-400">Products</li>
        </Link>
        <Link to={"store"}>
          <li className="my-4 py-4 border-b border-slate-400">Store</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="w-full shadow-md">
      <div className="h-10vh flex justify-between z-50 max-w-6xl mx-auto text-black md:py-5 px-10 py-4">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-semibold">MODERNA</span>
        </div>
        <div className="md:flex hidden md:flex-1 items-center justify-end ">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/furniture"}>
                <li>Furniture</li>
              </Link>
              <Link to={"products"}>
                <li>Products</li>
              </Link>
              <Link to={"store"}>
                <li>Store</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex mr-5 text-2xl gap-5">
          <button>
            <GoSearch />
          </button>
          <button>
            <IoBagOutline />
          </button>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition-all text-2xl"
          onClick={handleMenu}
        >
          {click ? <IoMdClose /> : <RiMenu3Line />}
        </button>
      </div>
    </nav>
  );
}
