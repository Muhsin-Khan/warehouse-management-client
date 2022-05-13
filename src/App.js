import "./App.css";
// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login";
import Signup from "./components/Sign Up/Signup";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
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

  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       const newUsers = [...users, data];
  //       setUsers(newUsers);
  //     });
  // };
  return (
    <div className="body">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* <div className="w-75 mx-auto">
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
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
