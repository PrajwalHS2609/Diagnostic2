import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import ecg1 from "@/Images/ecg/ecg1.png";
import ecg2 from "@/Images/ecg/ecg2.png";
import ecg3 from "@/Images/ecg/ecg3.png";
export const metadata = {
  title: "ECG Test in Bangalore | Best ECG Tests Near Me",
  description:
    " ECG Test in Bangalore a fundamental diagnostic tool in cardiology, measures the electrical activity of the heart, unveiling essential insights into its health. ",
  canonical: "https://diagnosticscenter.co.in/ecg-test-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function ECGTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={ecg1.src}
        imageSrc2={ecg2.src}
        imageSrc3={ecg3.src}
        alt="ECG Banner"
        head="Test in Bangalore "
        highlight="ECG "
        para="Accurate insights to keep your health moving forward"
        bread="ECG Test"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
