import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg";
import github_icon from "../../assets/github.jpg";
import insta_icon from "../../assets/insta.webp";
import linkdin_icon from "../../assets/linkdin.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Gourav Sonaniya.  All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
          
          <a className="btn" href="https://www.linkedin.com/in/gouravsonaniya83/" target="blank">
            <img src={linkdin_icon}/>
          </a>

          <a className="btn" href="https://github.com/gouravsonaniya" target="blank">
            <img src={github_icon}/>
          </a>

          <a className="btn" href="">
            <img src={insta_icon}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
