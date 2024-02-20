import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AllProductsData } from "../components/ProductsInfo/AllProductsData";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function ProductPage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const selectedProduct = AllProductsData.find(
    (product) => product.id === productId
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleNextImage = () => {
    setActiveImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProduct.photos.length
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProduct.photos.length) %
        selectedProduct.photos.length
    );
  };

  return (
    <div className="flex md:mx-[170px] items-center flex-col md:flex-row justify-center my-20">
      <div className="flex m-auto gap-2.5 md:gap-4 px-2">
        <div className="flex flex-col gap-3.5 md:gap-4 ">
          {selectedProduct.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt=""
              className="w-[500px] md:w-[700px]"
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        <div className="img-prod">
          <img
            src={selectedProduct.photos[activeImageIndex]}
            alt=""
            className="w-[2500px] md:w-[3150px]"
          />
          <div className="flex gap-2  justify-between -mt-56">
            <div
              className="border-2 p-4 border-gray-400 hover:bg-gray-800 text-lg bg-transparent hover:text-white cursor-pointer"
              onClick={handlePrevImage}
            >
              <MdArrowBackIos />
            </div>
            <div
              className="border-2 p-4 border-gray-400 hover:bg-gray-800 text-lg bg-transparent hover:text-white  cursor-pointer "
              onClick={handleNextImage}
            >
              <MdArrowForwardIos className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 flex flex-col mt-10 sm:mt-0">
        <h1 className="text-gray-700 text-xl md:text-3xl font-semibold">
          {selectedProduct.ProductName}
        </h1>
        <div className="flex my-5 gap-8 text-base md:text-xl font-semibold">
          <div className="text-gray-500 line-through">
            {"$" + selectedProduct.oldPrice}
          </div>
          <div className="text-red-500 ">{"$" + selectedProduct.newPrice}</div>
        </div>
        <div className="text-xs md:text-sm mb-5">
          {selectedProduct.description}
        </div>
        <button className="py-3.5 px-10 md:w-60 text-lg font-medium text-black bg-transparent border-2 border-black hover:bg-gray-800 hover:text-white transition-all ease-in-out ">
          ADD TO CART
        </button>
        <p className="mt-2.5 text-sm">
          <span className="font-semibold">Category: </span>
          {selectedProduct.Category}
        </p>
        <p className="mt-2.5 text-sm">
          <span className="font-semibold">Tags: </span>
          {selectedProduct.tags.map((val, key) => {
            return <span key={key}>{val + "  " + " "}</span>;
          })}
        </p>
      </div>
    </div>
  );
}
