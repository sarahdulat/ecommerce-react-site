import React, { useState, useEffect } from "react";
import { commerce } from "./lib/Commerce";
import ProductList from "./components/ProductList";
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

  return (
    <div className="app">
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
