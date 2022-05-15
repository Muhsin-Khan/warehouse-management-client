import React, { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Products: {products.length} </h1>
      {
        products.map((p) => (
        
          <h2>Name: {p.name}
          <h4> Price: ${p.price} </h4>
          <h4> Supplier Name: {p.supplier} </h4>
          <h4> Quantity: {p.quantity} </h4>
          </h2>
          
         
         ))
      }
    </div>
  );
};

export default Products;
