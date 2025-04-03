import BommanahalliDiagnosticsContent from "@/components/DiagnosticCities/BommanahalliDiagnostics/BommanahalliDiagnosticsContent";
import BommanahalliDiagnosticsHead from "@/components/DiagnosticCities/BommanahalliDiagnostics/BommanahalliDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "Diagnostics Center in Bommanahalli| Diagnostics Services Near Me",
  description:
    "Diagnostics Center in Bommanahalli, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
  canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-bommanahalli",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function BommanahalliDiagnostic() {
  return (
    <div className="page-container">
      <HomeHeader />
      <BommanahalliDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <BommanahalliDiagnosticsContent />
    </div>
  );
}
