import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ item, onRemoveFromCart }) => {
  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img
        classname="cart-item__image"
        src={item.media.source}
        alt={item.name}
      />
      <div className="cart-item__details">
        <h4 className="cart-tem__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <p>{item.quantity}</p>
        </div>
        <div classname="cart-tem__details-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <button
        type="button"
        className="cart-item__remove"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object
};

export default CartItem;
