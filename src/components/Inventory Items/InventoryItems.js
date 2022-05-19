import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Products from "../Products/Products";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://desolate-taiga-23981.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h1 className="products-title pt-4 pb-1 mt-3 mb-3">
        {" "}
        All Inventory Items{" "}
      </h1>
      <div className="products">
        {products.map((p) => (
          <Product key={p._id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
