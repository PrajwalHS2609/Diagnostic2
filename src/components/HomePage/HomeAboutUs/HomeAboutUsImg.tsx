import React from "react";
import "./HomeAboutUs.css";
import Image from "next/image";
import logo from "@/Images/logoWhite.png";
const HomeAboutUsImg = () => {
  return (
    <div className="homeAboutImg-container">
      <img
        src="https://medilo-html.netlify.app/assets/img/about_img_1.jpg"
        alt=""
      />
      <img
        src="https://medilo-html.netlify.app/assets/img/about_img_2.jpg"
        alt=""
      />
      <div className="homeAboutImg-logo">
        <Image src={logo} alt="logoWhite" />
      </div>

      <div className="homeAboutImg-design1"></div>
    </div>
  );
};

export default HomeAboutUsImg;
