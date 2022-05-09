import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer footer-style">
      <h3 className="footer-heading"> Tech Bhandar {year}</h3>
      <p className="copyright"> Copyright © {year} Tech Bhandar</p>
      <p className="font-style">All rights reserved</p>
    </div>
  );
};

export default Footer;
