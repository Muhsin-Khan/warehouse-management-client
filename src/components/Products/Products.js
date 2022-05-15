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
      <h1 className="products-title pt-4 pb-1"> All Products </h1>
      <div className="products">
      {
        products.map(p => (
        
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
