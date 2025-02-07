import Image from "next/image";
import React from "react";
import abtUsBanner from "@/Images/aboutUsBanner.png";
const ContactUsHeader = () => {
  return (
    <div className="homeHeader-container">
      <Image src={abtUsBanner} alt="contactUs"/>
      <div className="homeHeader-cover">
        <div className="homeHeader-coverContent">
          <h2>Contact Us</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHeader;
