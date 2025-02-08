import HealthPackageHeader from "@/components/HealthPackage/HealthPackageHeader";
import HealthPackageTable from "@/components/HealthPackage/HealthPackageTable/HealthPackageTable";
import HealthPackageWellness from "@/components/HealthPackage/HealthPackageWellness/HealthPackageWellness";

export default function HealthPackage() {
  return (
    <div className="page-container">
      <HealthPackageHeader />
      <HealthPackageWellness />
      <HealthPackageTable />
    </div>
  );
}
