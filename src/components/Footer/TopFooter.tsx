import React from "react";
import "./Footer.css";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";
import FooterService from "./FooterService";
import FooterConsultation from "./FooterConsultation";

const TopFooter = () => {
  return (
    <div className="topFooter-container">
      <FooterAddress />
      <div className="topFooter-content">
        {" "}
        <FooterLinks />
        <FooterService />
        <FooterConsultation />
      </div>
    </div>
  );
};

export default TopFooter;
