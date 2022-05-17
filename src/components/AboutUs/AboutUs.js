import React from "react";
import "./AboutUs.css";
import aboutUs from "../../aboutUs/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <div>
        <h2 className="aboutUs-title">
          About <span className="tech-bhandar">Tech Bandar</span>
        </h2>
        <div className="about-us">
          <div className="about-info">
            <img src={aboutUs} alt="" />
          </div>
          <div>
            <div className="info">
              <h4>
                The <span className="tech-bhandar">Tech Bhandar</span>{" "}
              </h4>
              <p className="tech-bhandar-text">
                is an world class inventory manage system where we basically
                store electrical and electronic products and distribute them all
                over the country door to door for serving people lives city even
                in rural areas. <br /> <br />
                In today’s dynamic, omnichannel, fulfillment economy, connected consumers want to buy anywhere, fulfill anywhere, and return anywhere. In order to be able to meet this need, businesses need the ability to respond quickly with warehouse management software that optimizes fulfillment capabilities. <br /> <br /> Our industry-leading, cloud-based warehouse management system prepares you for tomorrow’s supply chain, today. WMS Cloud extends supply chains to align inventory management and fulfillment services with modern purchasing methods, and offers real time visibility into an entire inventory—available via smart phone and browser—the only requirement being access to the Internet.
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Seperator Line */}
        <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="seperator-line w-100 mt-5"></div></div>
        
        {/* Give us feedback */}
        <div className="w-50 mx-auto mt-5">
            <h4 className="feedbakc-title">Give your Feedback</h4>
            <form className="d-flex flex-column" action="">
              <input className="mb-2" placeholder="Name" type="text" name="" id="" />
              <input className="mb-2" placeholder="Email" type="email" name="" id="" />
              <textarea className="mb-2" placeholder="Write your feedback..." type="text" name="" id="" />
              <input className="mb-5" type="submit" name="" id="" />
            </form>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
