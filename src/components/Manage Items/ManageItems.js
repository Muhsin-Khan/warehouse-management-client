import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./ManageItems.css";

const ManageItems = () => {
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
    <div className="w-50 mx-auto ">
      <h2 className="mb-5 mt-4 text-center">Manage your Items/Products here</h2>
      <Link to='/addItems'> <button 
        
        className="manage-item-button w-100 mb-5"
      >
        Add New Items
      </button></Link>
      <div className="m-5">
        {products.map((p) => (
          <dev className="" key={p._id}>
            <h4 className="pb-3">{p.name}</h4>
            <img className="w-50 mb-2 ps-5" src={p.img} alt="" />
            <br />
            <button
              style={{ width: "" }}
              className="bg-danger mb-5 "
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

export default ManageItems;
