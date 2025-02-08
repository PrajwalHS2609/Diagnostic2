import React from "react";
import "./HomeWhy.css";
import HomeWhyHead from "./HomeWhyHead";
import HomeWhyCard from "./HomeWhyCard";

const HomeWhy = () => {
  return (
    <div className="homeWhyMain-container">
      {/* <img
        src="https://medilo-html.netlify.app/assets/img/service_bg_2.jpg"
        alt=""
      /> */}
      <div className="homeWhyMain-content">
        <HomeWhyHead />
        <HomeWhyCard />
      </div>
    </div>
  );
};

export default HomeWhy;
