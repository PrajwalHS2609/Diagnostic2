import MagadiDiagnosticsContent from "@/components/DiagnosticCities/MagadiDiagnostics/MagadiDiagnosticsContent";
import MagadiDiagnosticsHead from "@/components/DiagnosticCities/MagadiDiagnostics/MagadiDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
    title: "Diagnostics Center in Magadi Road| Diagnostics Services Near Me",
    description:
      "Diagnostics Center in Magadi Road, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
    canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-magadi-road",
    keywords: [
      "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
      "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
    ],
  };
export default function MagadiDiagnostics() {
  return (
    <div className="page-container">
      <HomeHeader />
      <MagadiDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <MagadiDiagnosticsContent />
    </div>
  );
}
