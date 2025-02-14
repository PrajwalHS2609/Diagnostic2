import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "About Bangalore Diagnostics Center | Best Diagnostics Center",
  description:
    "Diagnostics Center in Bangalore is we take pride in being an NABL Accredited Laboratory, providing Comprehensive Diagnostic Services and delivering quality Health care",
  canonical: "https://diagnosticscenter.co.in/about-us",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function AboutUs() {
  return (
    <div className="page-container">
      <AboutUsHeader />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>
      <HomeWhy />
    </div>
  );
}
