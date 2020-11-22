import React, { useState, useEffect } from "react";
import { commerce } from "./lib/Commerce.js";
import "./styles/scss/style.scss";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
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

  return <div classname="app"></div>;
};

export default App;
