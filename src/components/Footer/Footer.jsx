import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            fugit beatae ipsa quod, molestiae suscipit. Harum, error!
            Repellendus error, excepturi corrupti eligendi ratione atque sint
            quod voluptates quidem ab tenetur sunt nam eius at suscipit iure vel
            earum voluptatum obcaecati?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul></ul>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Refund Policy</li>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Address: 123, XYZ Street, ABC City, State, Country</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Tomato. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
