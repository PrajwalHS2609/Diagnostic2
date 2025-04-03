import YelahankaDiagnosticsContent from "@/components/DiagnosticCities/YelahankaDiagnostics/YelahankaDiagnosticsContent";
import YelahankaDiagnosticsHead from "@/components/DiagnosticCities/YelahankaDiagnostics/YelahankaDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import React from "react";
export const metadata = {
    title: "Diagnostics Center in Yelahanka | Diagnostics Services Near Me",
    description:
      "Diagnostics Center in Yelahanka, Bangalore for all types of Blood Tests, Ultrasound Scanning, X-Ray, Doppler, Health Packages & more. Call Now!",
    canonical: "https://diagnosticscenter.co.in/diagnostics-center-in-yelahanka",
    keywords: [
      "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
      "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
    ],
  };
const YelahankaDiagnostics = () => {
  return (
    <div className="page-container">
      <HomeHeader />
      <YelahankaDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <YelahankaDiagnosticsContent />
    </div>
  );
};

export default YelahankaDiagnostics;
