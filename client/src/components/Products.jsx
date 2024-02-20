import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { AllProductsData } from "./ProductsInfo/AllProductsData";
import Items from "./ProductsInfo/Items";

export default function Products() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto mt-10 ">
      <div className="flex w-full items-center justify-between px-8 ">
        <h1 className="text-gray-600 text-lg font-semibold">All products</h1>
        <button className="text-lg flex items-center  text-gray-600">
          more
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 p-6">
        {AllProductsData.map((val, key) => {
          return (
            <Items
              key={key}
              ProductName={val.ProductName}
              photos={val.photos[0]}
              Category={val.Category}
              newPrice={val.newPrice}
              oldPrice={val.oldPrice}
              description={val.description}
              id={val.id}
            />
          );
        })}
      </div>

      {/* <div className="grid sm:grid-cols-3 gap-8 p-6">
        <Items />
        <Items />
        <Items />
      </div>
      <div className="py-3 px-8 mt-8"></div> */}
    </div>
  );
}
