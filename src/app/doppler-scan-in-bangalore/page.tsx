import DopplerCard from "@/components/Services/Doppler/DopplerCard";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import doppler1 from "@/Images/doppler/doppler1.png";
import doppler2 from "@/Images/doppler/doppler2.png";
import doppler3 from "@/Images/doppler/doppler3.png";
import DopplerContentHead from "@/components/Services/Doppler/DopplerContentHead";
import DopplerContentFooter from "@/components/Services/Doppler/DopplerContentFooter";
export const metadata = {
  title: "Doppler Scanning in Bangalore | Best Doppler Scans Near Me",
  description:
    "Doppler Scanning in Bangalore, it is a gateway to understanding the intricate flow of blood, offering insights that are crucial in diagnosing and managing various medical conditions.",
  canonical: "https://diagnosticscenter.co.in/doppler-scanning-in-bangalore ",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function DopplerScan() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={doppler1.src}
        imageSrc2={doppler2.src}
        imageSrc3={doppler3.src}
        alt="Doppler Banner"
        head="in Bangalore "
        highlight="Doppler Scan"
        para="Accurate insights to keep your health moving forward"
        bread="Doppler Scan"
      />
      <DopplerContentHead/>
      <DopplerCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <DopplerContentFooter/>
    </div>
  );
}
