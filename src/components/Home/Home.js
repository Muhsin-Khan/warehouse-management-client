import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import InventoryItems from "../Inventory Items/InventoryItems";
// import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <InventoryItems></InventoryItems>

        
          <Link to="/manageInventory">
            <button className="manage-inventories-button">
              Manage Inventories
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default Home;
