import React, { useState, useEffect } from "react";
import { commerce } from "./lib/Commerce";
import ProductList from "./components/ProductList";
import CartNav from "./components/CartNav";
import "./styles/style.scss";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error.", error);
      });
  };

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.log("There was an error adding the item to the cart.", error);
      });
  };

  const handleUpdateCart = (lineItemId, quantity) => {
    console.log(quantity);
    commerce.cart
      .update(lineItemId, quantity)
      .then((item) => {
        setCart(item.quantity);
      })
      .catch((error) => {
        console.log("There was an error updating the item in the cart.", error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp, cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  return (
    <div className="app">
      <CartNav
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onCartUpdate={handleUpdateCart}
      />
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
