import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={product.media.source}
        alt={product.name}
      />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p
          className="product__description"
          dangerouslySetInnerHTML={{ _html: product.description }}
        ></p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
