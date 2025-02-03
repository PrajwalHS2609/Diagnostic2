import React from "react";
import "./HomeAboutUs.css";
import HomeAboutUsImg from "./HomeAboutUsImg";
import HomeAboutUsContent from "./HomeAboutUsContent";
const HomeAboutUs = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <HomeAboutUsImg />
      </div>
      <div className="homeAbout-content">
        <HomeAboutUsContent />
      </div>
    </div>
  );
};

export default HomeAboutUs;
