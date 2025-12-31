import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import "./globals.css";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeSubServices from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeContentHead from "@/components/HomePage/HomeContentHead";
import HomeContentFooter from "@/components/HomePage/HomeContentFooter";
import FaqComponent from "@/components/FaqComponent/FaqComponent";
export const metadata = {
  title: "Diagnostics Services in Bangalore | Best Diagnostics Near Me",
  description:
    "Diagnostics Services in Bangalore for Pathology, Ultrasound, 	Digital X-Ray, Doppler Scanning, Radiological Procedure, ECHO, TMT, ECG & many more services. ",
  canonical: "https://diagnosticscenter.co.in/",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function Home() {
  return (
    <div className="page-container">
      <HomeHeader />
      <HomeContentHead />
      <HomeServices />
      <HomeAboutUs />
      <HomeWhy />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeSubServices />
      {/* <FaqComponent/> */}
      <HomeContentFooter />
    </div>
  );
}
