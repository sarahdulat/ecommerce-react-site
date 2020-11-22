import React from 'react';
import productItem from './ProductItem.js';

const ProductsList = ({ product }) => {
  return (
    <div className="products">
      { products.map((product => (
        <ProductItem 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductsList;
