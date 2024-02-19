import React from "react";

import ProductsSidebar from "./ProductsSidebar";
import ProductsDetails from "./ProductsDetails";

export default function Products() {
  return (
    <div className="flex">
      <ProductsSidebar />
      <ProductsDetails />
    </div>
  );
}
