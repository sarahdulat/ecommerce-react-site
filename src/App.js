import React, { useState } from "react";
import { commerce } from "./lib/Commerce.js";
// import './style/scss/style.scss';

const App = () => {
  const [products, setProducts] = useState([]);

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
