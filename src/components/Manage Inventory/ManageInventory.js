import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete the item?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((p) => p._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="mb-5 mt-4 text-center">Manage your Items/Products here</h2>
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/addItems">
          
          <button className="add-item-button">Add New Items</button>
        </Link>
      </div>

      <div className="m-5 manage-item">
        {products.map((p) => (
          <dev className="manage-item-child" key={p._id}>
            <h4 className="pb-3">{p.name}</h4>
            <img className="w-50 mt-2 ps-2 mb-3" src={p.img} alt="" />
            <br />
            <h6>Supplier: {p.supplier} </h6>
            <h6>Quantity: {p.quantity} </h6>
            <h5>Price: ${p.price} </h5>
            <button
              style={{ width: "" }}
              className="bg-danger mt-2 delete-item-button "
              onClick={() => handleDelete(p._id)}
            >
              Delete Item
            </button>
          </dev>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
