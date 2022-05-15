import React from "react";
import "./Product.css";

const Product = ({ products }) => {
  const { img, name, description, quantity, price, supplier } = products;
  return (
    <div>
      <div className="service">
        <img className="w-100" src={img} alt="" />
        <div className="service-info">
          <h3>Service Name: {name}</h3>
          <p>Description: {description}</p>
          <h6>Quantity: {quantity} </h6>
          <h6>Supplier Name: {supplier}</h6>
          <h5>Price: ${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
