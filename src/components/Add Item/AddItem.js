import React from "react";
import { useEffect, useState } from "react";
import "./AddItem.css";

const AddItem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

  // Post the data to the server....

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        const newUsers = [...users, data];
        setUsers(newUsers);
      });
  };
  return (
    <div>
      <h1>thisis add i...</h1>
      <div className="w-75 mx-auto">
      Data Count: {users.length}
      <form
        className="d-flex flex-column w-50 mx-auto"
        onSubmit={handleAddUser}
      >
        <input
          className="mb-2"
          type="text"
          name="name"
          placeholder="Name"
          id=""
        />
        <input
          className="mb-2"
          type="text"
          name="email"
          placeholder="Email"
          id=""
        />
        <input
          className="btn-primary mb-2 w-30 mx-auto"
          type="submit"
          name=""
          value="Add User"
          id=""
        />
      </form>
      {users.map((u) => (
        <h4>
          {" "}
          id: {u.id} :: Name: {u.name} :: Email: {u.email}{" "}
        </h4>
      ))}
      </div>
    </div>
  );
};

export default AddItem;
