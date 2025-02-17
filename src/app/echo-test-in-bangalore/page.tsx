
import EchoCard from "@/components/Services/Echo/EchoCard";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import echo1 from "@/Images/echo/echo1.png";
import echo2 from "@/Images/echo/echo2.png";
import echo3 from "@/Images/echo/echo3.png";
import EchoContentHead from "@/components/Services/Echo/EchoContentHead";
import EchoContentFooter from "@/components/Services/Echo/EchoContentFooter";
export const metadata = {
  title: "ECHO Test in Bangalore | Best ECHO Tests Near Me",
  description:
    "ECHO Test in Bangalore utilize ultrasound technology to provide detailed and real-time images of the heart’s structure and function.",
  canonical: "https://diagnosticscenter.co.in/echo-test-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function EchoTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={echo1.src}
        imageSrc2={echo2.src}
        imageSrc3={echo3.src}
        alt="Echo Banner"
        head="Test in Bangalore "
        highlight="Echo "
        para="Accurate insights to keep your health moving forward"
        bread="Echo Test"
      />
      <EchoContentHead/>
      <EchoCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <EchoContentFooter/>
    </div>
  );
}
