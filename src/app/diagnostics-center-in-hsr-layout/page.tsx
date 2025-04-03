import HSRLayoutDiagnosticContent from "@/components/DiagnosticCities/HSRLayoutDiagnostic/HSRLayoutDiagnosticContent";
import HSRLayoutDiagnosticHead from "@/components/DiagnosticCities/HSRLayoutDiagnostic/HSRLayoutDiagnosticHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
    title: "Diagnostics Center in HSR Layout | Diagnostics Services Near Me",
    description:
      "Diagnostics Center in HSR Layout, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
    canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-hsr-layout",
    keywords: [
      "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
      "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
    ],
  };
export default function HSRLayoutDiagnostics(){
    return(
<div className="page-container">
      <HomeHeader />
      <HSRLayoutDiagnosticHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <HSRLayoutDiagnosticContent/>
    </div>
    )
}