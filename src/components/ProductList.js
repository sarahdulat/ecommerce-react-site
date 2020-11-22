import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsList;
