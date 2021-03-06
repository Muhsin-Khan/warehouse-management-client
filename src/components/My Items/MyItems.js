import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://desolate-taiga-23981.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        const datas = data.filter((myItem) => myItem.email === user?.email);

        setItems(datas);
      });
  }, [user?.email]);

  const hendeleDelet = (id) => {
    const proceed = window.confirm("Are you sure you want to delete the item?");
    if (proceed) {
      const url = `https://desolate-taiga-23981.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remain = items.filter((item) => item._id !== id);
          setItems(remain);
        });
    }
  };

  return (
    <div className="container">
      <h3 className="pb-3 text-center m-4">My Total Items: {items.length}</h3>
      <div className="my-Items">
        {items.map((item) => {
          return (
            <div className="myItems-child-dive">
              <img width="100%" src={item.img} alt="alt" />
              <h3>{item.name}</h3>
              <h5>Price:{item.price}</h5>
              <h5>Supplier: {item.supplier}</h5>
              <h5> Email: {item.email}</h5>
              <h5>Quantity: {item.quantity}</h5>
              <button
                onClick={() => hendeleDelet(item._id)}
                className="myItem-delete-button btn-danger mt-3"
              >
                Delete{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyItems;
