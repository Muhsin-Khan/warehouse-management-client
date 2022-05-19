import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = `https://desolate-taiga-23981.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, item]);

  // Handle Deliver Button......
  const handleDeliveredQuantity = () => {
    const quaNtity = item.quantity - 1;
    if (quaNtity < 0) {
      return alert("Hey...! Item is finished already!");
    }
    const newQuantity = { quaNtity };

    fetch(`https://desolate-taiga-23981.herokuapp.com/product/${id}`, {
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
  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    console.log("button clicked");

    const quantityNumber = event.target.number.value;
    if (quantityNumber <= 0) {
      return alert("Please! input a valid number.");
    }
    console.log("checking...", quantityNumber);
    const quaNtity = parseInt(item.quantity) + parseInt(quantityNumber);
    const newQuantity = { quaNtity };
    console.log(newQuantity);

    fetch(`https://desolate-taiga-23981.herokuapp.com/product/${id}`, {
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

        <div className="ms-4 mt-3 mb-3 pe-4 w-50">
          <h4>{item.name}</h4>
          <img className="w-50 mt-2 ps-2 mb-3" src={item.img} alt="" />
          <h5>Quantity: {item.quantity}</h5>
          <h4>Price: ${item.price}</h4>
          <h5>Supplier: {item.supplier}</h5>
          <h6>Item Id: {id}</h6>
        </div>

        {/* Input side or right side */}

        <div className="me-5 mt-3 pt-5 justify-content-center align-items-center ">
          <br />
          <button
            className="deilivered-btn mb-5"
            onClick={handleDeliveredQuantity}
          >
            Delivered
          </button>
          <br />
          <div className="update-item-form">
            <form className="" onSubmit={handleUpdateQuantity}>
              <h5 className="mb-3">Restock the items</h5>
              <input
                className="mb-2 mt-2"
                placeholder="New Quantity"
                type="number"
                name="number"
              />
              <br />
              <input
                className="mb-2 mt-2 update-quantity-btn"
                type="submit"
                value={"Update Quantity"}
              />
            </form>
          </div>
        </div>
      </div>

      {/* Manage Inventory button to Manage Inventory Route */}

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
