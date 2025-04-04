import KRPuramDiagnosticsContent from "@/components/DiagnosticCities/KRPuramDiagnostics/KRPuramDiagnosticsContent";
import KRPuramDiagnosticsHead from "@/components/DiagnosticCities/KRPuramDiagnostics/KRPuramDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "Diagnostics Center in KR Puram| Diagnostics Services Near Me",
  description:
    "Diagnostics Center in KR Puram, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
  canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-kr-puram",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function KRPuramDiagnostics() {
  return (
    <div className="page-container">
      <HomeHeader />
      <KRPuramDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <KRPuramDiagnosticsContent/>
    </div>
  );
}
