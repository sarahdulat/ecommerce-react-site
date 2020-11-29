import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const CartItem = ({ item, onRemoveFromCart }) => {
  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={item.media.source}
        alt={item.name}
      />
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <p>x {item.quantity}</p>
        </div>
      </div>
      <div className="cart-item__details-price">
        {item.line_total.formatted_with_symbol}
        <button
          type="button"
          className="cart-item__remove"
          onClick={handleRemoveFromCart}
        >
          <FontAwesomeIcon size="1x" icon="trash" color="#292B83" />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object
};

export default CartItem;
