import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ( props ) => {
  const { _id, img, name, description, quantity, price, supplier } = props.p;
  console.log(props.p)
  return (
    <div>
      <div className="product">
        <img className="w-100" src={img} alt="" />
        <div className="product-info">
          <h4>{name}</h4>
          <p>Description: {description}</p>
          <h6>Quantity: {quantity} </h6>
          <h6>Supplier: {supplier}</h6>
          <h5>Price: ${price}</h5>
          
        </div>
        <Link to={"/inventory/"+_id}>
        <button className="w-100 mx-auto mt-3 mb-0 product-button">Update</button>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Product;
