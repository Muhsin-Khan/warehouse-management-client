import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <nav>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/inventoryItems">Inventory Items</Link>
        <Link to="/addItems">Add Item</Link>
        <Link to="/manageItems">Manage Items</Link>
        <Link to="/services">Services</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">Abouts Us</Link>
        {user ? (
          <button
            className="btn btn-link text-white text-decoration-none ms-0 me-2"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  );
};

export default Header;
