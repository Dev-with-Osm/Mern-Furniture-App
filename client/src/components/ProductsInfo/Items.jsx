import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";

export default function Items(props) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow  overflow-hidden border-gray-300 border-2 w-full sm:w-[330px]">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.photos}
          alt="product cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg text-center font-semibold text-slate-700 truncate">
            {props.ProductName}
          </p>
          <div className="flex justify-between px-2 items-center  gap-1">
            <div className="flex items-center gap-2 text-lg bg-gray-400 px-2 rounded-md">
              <MdOutlineCategory className="w-7 text-orange-400" />
              <p className=" text-gray-50 font-medium w-full">
                {props.Category}
              </p>
            </div>
            <div>
              <p className="line-through text-gray-500 font-semibold">
                {props.oldPrice ? "$" + props.oldPrice : ""}
              </p>
              <p className="text-red-700 font-semibold">${props.newPrice}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {props.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
