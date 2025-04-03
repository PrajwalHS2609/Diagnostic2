import BannerghattaDiagnosticsContent from "@/components/DiagnosticCities/BannerghattaDiagnostics/BannerghattaDiagnosticsContent";
import BannerghattaDiagnosticsHead from "@/components/DiagnosticCities/BannerghattaDiagnostics/BannerghattaDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "Diagnostics Center in Bannerghatta Road | Diagnostics Services Near Me",
  description:
    "Diagnostics Center in Bannerghatta Road, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
  canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-bannerghatta-road",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function BannerghattaDiagnostic() {
  return (
    <div className="page-container">
      <HomeHeader />
      <BannerghattaDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <BannerghattaDiagnosticsContent/>
    </div>
  );
}
