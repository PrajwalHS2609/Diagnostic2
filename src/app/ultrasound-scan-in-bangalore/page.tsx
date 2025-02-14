import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import UltrasoundCard from "@/components/Services/Ultrasound/UltrasoundCard";
import ultraSound1 from "@/Images/ultrasound/ultrasound1.png"
import ultraSound2 from "@/Images/ultrasound/ultrasound2.png"
import ultraSound3 from "@/Images/ultrasound/ultrasound3.png"
export const metadata = {
  title: "Ultrasound Scan in Bangalore | 3D & 4D Ultrasound Scanning Near Me",
  description:
    "Ultrasound Scan in Bangalore. Expecting mothers in Bangalore can rely on our 3D and 4D Ultrasound Scans for routine pregnancy monitoring.",
  canonical: "https://diagnosticscenter.co.in/ultrasound-scan-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function UltrasoundScan() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={ultraSound1.src}
        imageSrc2={ultraSound2.src}
        imageSrc3={ultraSound3.src}
        alt="Ultrasound Banner"
        head=" Services in Bangalore "
        highlight="Ultrasound Scan"
        para="Creating Life's masterpiece, one kick at a time"
        bread="Ultrasound Scan"
      />
      <UltrasoundCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>

      <HomeWhy />
    </div>
  );
}
