import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import XrayCard from "@/components/Services/Xray/XrayCard";
import XrayContentFooter from "@/components/Services/Xray/XrayContentFooter";
import XrayContentHead from "@/components/Services/Xray/XrayContentHead";
import xray1 from "@/Images/xray/x-ray1.png";
import xray2 from "@/Images/xray/x-ray2.png";
import xray3 from "@/Images/xray/x-ray3.png";
export const metadata = {
  title: "Digital X-Ray in Bangalore | Best X-Ray Test Near Me",
  description:
    "Digital X-Ray in Bangalore are at the forefront of this evolution, offering a seamless blend of cutting-edge technology and compassionate care. ",
  canonical: "https://diagnosticscenter.co.in/digital-x-ray-test-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function UltrasoundScan() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={xray1.src}
        imageSrc2={xray2.src}
        imageSrc3={xray3.src}
        alt="Xray Banner"
        head=" Services in Bangalore "
        highlight="X-ray"
        para="Creating Life's masterpiece, one kick at a time"
        bread="X-Ray"
      />
      <XrayContentHead/>
      <XrayCard />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <XrayContentFooter/>
    </div>
  );
}
