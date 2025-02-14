import HealthPackageContentFooter from "@/components/HealthPackage/HealthPackageContentFooter";
import HealthPackageContentHead from "@/components/HealthPackage/HealthPackageContentHead";
import HealthPackageHeader from "@/components/HealthPackage/HealthPackageHeader";
import HealthPackageTable from "@/components/HealthPackage/HealthPackageTable/HealthPackageTable";
// import HealthPackageWellness from "@/components/HealthPackage/HealthPackageWellness/HealthPackageWellness";
export const metadata = {
  title: "Health Packages in Bangalore | Diagnostics Packages Near Me",
  description:
    "Health Packages in Bangalore is essential for those experiencing urinary tract issues, kidney-related concerns, or reproductive health problems.",
  canonical: "https://diagnosticscenter.co.in/health-packages-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function HealthPackage() {
  return (
    <div className="page-container">
      <HealthPackageHeader />
      <HealthPackageContentHead />
      {/* <HealthPackageWellness /> */}
      <HealthPackageTable />
      <HealthPackageContentFooter />
    </div>
  );
}
