import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./AddItem.css";

const AddItem = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // const handleAddUser = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const user = { name, email };

  // Post the data to the server....

  // fetch("http://localhost:5000/users", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(user),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  // console.log(data)
  //   const newUsers = [...users, data];
  //   setUsers(newUsers);
  // });
  const {register,handleSubmit} = useForm();
  
  const onSubmit = (data) => {console.log(data);
  
  const url = `http://localhost:5000/product`
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(result =>{
    console.log(result);
  })
  }
  return (
    <div className="w-50 mx-auto">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Product name" {...register("name")} />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price ")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddItem;
