import React from "react";
import "./Footer.css";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content"><TopFooter/></div>
      <div className="footer-content"><BottomFooter/></div>
    </div>
  );
};

export default Footer;
