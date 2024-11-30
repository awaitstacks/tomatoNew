import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            laudantium sunt provident cumque voluptatibus asperiores sequi
            delectus quidem temporibus odit eum laborum officia blanditiis ipsam
            ex optio cupiditate minima consequuntur.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9384336820</li>
            <li>vinothkumbam0@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @Tomato.com - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
