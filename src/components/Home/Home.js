import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import ExtraOne from "../ExtraOne/ExtraOne";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
// import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Products></Products>

        
          <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
          <Link to="/manageInventory">
            <button className="manage-inventories-button">
              Manage Inventories
            </button>
          </Link>
          </div>
        
      </div>
      <div className="d-flex align-items-center container">
        <div style={{ height: "1px" }} className="seperator-line w-100 mt-5"></div>
        </div>
      <ExtraOne></ExtraOne>
      <ExtraTwo></ExtraTwo>
    </div>
  );
};

export default Home;
