import React from "react";
import abtUsBanner from "@/Images/aboutUsBanner.png";
import Image from "next/image";
import "./AboutUs.css";
const AboutUsHeader = () => {
  return (
    <div className="homeHeader-container">
      <Image src={abtUsBanner} alt="abtUsBanner" width={1000} height={1000} />
      <div className="homeHeader-cover">
        <div className="homeHeader-coverContent">
          <h2>About Us</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
