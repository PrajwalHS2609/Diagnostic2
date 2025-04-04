import DevanahalliDiagnosticsContent from "@/components/DiagnosticCities/DevanahalliDiagnostics/DevanahalliDiagnosticsContent";
import DevanahalliDiagnosticsHead from "@/components/DiagnosticCities/DevanahalliDiagnostics/DevanahalliDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export const metadata = {
    title: "Diagnostics Center in Devanahalli| Diagnostics Services Near Me",
    description:
      "Diagnostics Center in Devanahalli, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
    canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-devanahalli",
    keywords: [
      "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
      "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
    ],
  };
export default function DevanahalliDiagnostics() {
  return (
    <div className="page-container">
      <HomeHeader />
      <DevanahalliDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <DevanahalliDiagnosticsContent />
    </div>
  );
}
