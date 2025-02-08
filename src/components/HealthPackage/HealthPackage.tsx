import React from "react";
import "./HealthPackage.css";
import HealthPackageHeader from "./HealthPackageHeader";
import HealthPackageWellness from "./HealthPackageWellness/HealthPackageWellness";
import HealthPackageTable from "./HealthPackageTable/HealthPackageTable";
const HealthPackage = () => {
  return (
    <div className="healthPackage">
      <HealthPackageHeader />
      <HealthPackageWellness />
      <HealthPackageTable />

    </div>
  );
};

export default HealthPackage;
