import React from "react";
import ProductItem from "./ProductItem.js";

const ProductsList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
