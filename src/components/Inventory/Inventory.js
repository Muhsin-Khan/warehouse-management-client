import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  // Handle Deliver Button......
  const handleDeliveredQuantity = () => {
    const quaNtity = item.quantity - 1;
    if(quaNtity<0){
        return alert("Hey...!Item is finished already!")
    }
    const newQuantity = { quaNtity };

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  };

  // Handle Added Quantity...
  const handleUpdateQuantity = event => {
    event.preventDefault();
    console.log("button clicked");

    const quantityNumber = event.target.number.value;
    if(quantityNumber<=0){
        return alert('Pease input a valid number!')
    }
    console.log("checking...", quantityNumber);
    const quaNtity =
      parseInt(item.quantity) + parseInt(quantityNumber);
    const newQuantity = {quaNtity};
    console.log(newQuantity);

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log("cheing-2", newQuantity);
      });
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="update-item d-flex w-50 mx-auto m-5">
        {/* informatiosn side or left side */}
        <div className="ms-4 mt-3 mb-3">
          <h2>{item.name}</h2>
          <img className="w-50 mt-2 ps-2 mb-3" src={item.img} alt="" />
          <h5>Quantity: {item.quantity}</h5>
          <h4>Price: ${item.price}</h4>
          <h5>Supplier: {item.supplier}</h5>
          <h6>Item Id: {id}</h6>
        </div>
        {/* input side or right side */}
        <div className="me-5 mt-3 mb-3 mx-auto  w-100">
          <br />
          <button onClick={handleDeliveredQuantity}>Delivered</button>
          <br />

          <form onSubmit={handleUpdateQuantity}>
            <h5 className="mb-2 mt-3">Update the Quantity</h5>
            <input
              className="mb-2"
              placeholder="New Quantity"
              type="number"
              name="number"
            />
            <br />
            <input className="mb-2" type="submit" value={"Update Quantity"} />
          </form>
        </div>
      </div>

      {/* Manage Inventory button */}
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/manageInventory">
          <button className="manage-inventories-button">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
