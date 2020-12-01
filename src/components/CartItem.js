import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faMinusCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faMinusCircle, faPlusCircle);

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
          <button
            type="button"
            className="cart-item__quantity-btn"
            onClick={handleRemoveFromCart}
          >
            <FontAwesomeIcon size="1x" icon="minus-circle" />
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            className="cart-item__quantity-btn"
            onClick={handleRemoveFromCart}
          >
            <FontAwesomeIcon size="1x" icon="plus-circle" />
          </button>
        </div>
        <button
          type="button"
          className="cart-item__remove"
          onClick={handleRemoveFromCart}
        >
          <FontAwesomeIcon size="1x" icon="trash" />
        </button>
      </div>
      <div className="cart-item__details-price">
        {item.line_total.formatted_with_symbol}
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object
};

export default CartItem;
