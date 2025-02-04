import React from "react";
import "./HomeSubServices.css";
import HomeSubServicesHead from "./HomeSubServicesHead";
import HomeSubServicesCard from "./HomeSubServicesCard";
const HomeSubServices = () => {
  return (
    <div className="homeSubService-container">
      <HomeSubServicesHead />
     <div className="homeSubService-content">
     <HomeSubServicesCard />
     </div>
    </div>
  );
};

export default HomeSubServices;
