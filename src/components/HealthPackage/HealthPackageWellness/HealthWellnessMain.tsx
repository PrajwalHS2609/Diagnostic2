import React from "react";
import "./../HealthPackage.css";
import HealthWellnessMainList from "./HealthWellnessMainList";
const HealthWellnessMain = () => {
  return (
    <div className="healthWellnessMain">
      <div className="healthWellnessMain-Content1">
        <img
          src="https://nisargadiagnostics.com/wp-content/uploads/2024/01/15-Years-of-Anniversary-Health-Package-Discount.png"
          alt=""
        />
      </div>
      <div className="healthWellnessMain-Content2">
        <HealthWellnessMainList />
      </div>
    </div>
  );
};

export default HealthWellnessMain;
