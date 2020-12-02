import React from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

const Cart = ({ cart, onRemoveFromCart, onAddToCart }) => {
  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }
    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  };
  const renderItems = () =>
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        className="cart__inner"
        onRemoveFromCart={onRemoveFromCart}
        onAddToCart={onAddToCart}
      />
    ));
  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal: </p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );
  const renderCheckout = () => (
    <div className="cart__checkout">
      <button name="Checkout" className="cart__btn-checkout">
        Checkout
      </button>
    </div>
  );
  return (
    <div className="cart">
      <h4 className="cart__heading">Shopping Cart</h4>
      {renderEmptyMessage()}
      {renderItems()}
      {renderTotal()}
      {renderCheckout()}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object
};

export default Cart;
