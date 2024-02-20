import React from "react";
import { useParams } from "react-router-dom";
import { AllProductsData } from "../components/ProductsInfo/AllProductsData";

export default function ProductPage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const selectedProduct = AllProductsData.find(
    (product) => product.id === productId
  );

  return (
    <div>
      {selectedProduct ? (
        <div>
          <h1>{selectedProduct.ProductName}</h1>
          <p>{selectedProduct.Category}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
