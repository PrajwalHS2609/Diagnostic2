import React from "react";
import "./Footer.css";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";
import FooterService from "./FooterService";
import FooterPost from "./FooterPost";

const TopFooter = () => {
  return (
    <div className="topFooter-container">
      <FooterAddress />
      <div className="topFooter-content">
        {" "}
        <FooterLinks />
        <FooterService />
        <FooterPost />
      </div>
    </div>
  );
};

export default TopFooter;
