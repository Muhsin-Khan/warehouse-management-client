import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container" >
      <h1 className="products-title pt-4 pb-1 mt-3 mb-3"> Inventory Items </h1>
      <div className="products">
      {
        products.slice(0,4).map(p => (
        
          <Product
          key={p._id}
          p={p}
          >
          </Product>
         ))
      }
      </div>
    </div>
  );
};

export default Products;
