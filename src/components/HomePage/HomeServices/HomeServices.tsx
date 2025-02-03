import React from "react";
import HomeServicesHead from "./HomeServicesHead";
import HomeServicesCard from "./HomeServicesCard";
import "./HomeServices.css"

const HomeServices = () => {
  return (
    <div className="homeService-container">
      <div className="homeService-content">
        <HomeServicesHead />
      </div>
      <div className="homeService-content">
        <HomeServicesCard />
      </div>
    </div>
  );
};

export default HomeServices;
