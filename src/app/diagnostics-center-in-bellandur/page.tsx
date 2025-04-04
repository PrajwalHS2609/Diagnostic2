import BellandurDiagnosticsContent from "@/components/DiagnosticCities/BellandurDiagnostics/BellandurDiagnosticsContent";
import BellandurDiagnosticsHead from "@/components/DiagnosticCities/BellandurDiagnostics/BellandurDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "Diagnostics Center in Bellandur | Diagnostics Services Near Me",
  description:
    "Diagnostics Center in Bellandur, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
  canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-bellandur",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function BellandurDiagnostics() {
  return (
    <div className="page-container">
      <HomeHeader />
      <BellandurDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <BellandurDiagnosticsContent />
    </div>
  );
}
