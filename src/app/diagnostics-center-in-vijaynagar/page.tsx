import VjaynagarDiagnosticsContent from "@/components/DiagnosticCities/VjaynagarDiagnostics/VjaynagarDiagnosticsContent";
import VjaynagarDiagnosticsHead from "@/components/DiagnosticCities/VjaynagarDiagnostics/VjaynagarDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
    title: "Diagnostics Center in Vjaynagar | Diagnostics Services Near Me",
    description:
      "Diagnostics Center in Vijaynagar, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
    canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-vijaynagar",
    keywords: [
      "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
      "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
    ],
  };
export default function VijaynagarDiagnostics() {
  return (
    <div className="page-container">
      <HomeHeader />
      <VjaynagarDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <VjaynagarDiagnosticsContent />
    </div>
  );
}
