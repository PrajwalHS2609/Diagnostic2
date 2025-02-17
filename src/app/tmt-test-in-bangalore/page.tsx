import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import TmtContentFooter from "@/components/Services/Tmt/TmtContentFooter";
import TmtContentHead from "@/components/Services/Tmt/TmtContentHead";
import tmt1 from "@/Images/tmt/tmt1.png";
import tmt2 from "@/Images/tmt/tmt2.png";
import tmt3 from "@/Images/tmt/tmt3.png";
export const metadata = {
  title: "TMT Test in Bangalore | Best Treadmill Test Near Me",
  description:
    "TMT Test in Bangalore is a dynamic tool in evaluating the heart’s response to exertion, offering valuable information about cardiovascular fitness and potential cardiac issues.",
  canonical: "https://diagnosticscenter.co.in/tmt-test-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function TMTTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={tmt1.src}
        imageSrc2={tmt2.src}
        imageSrc3={tmt3.src}
        alt="TMT Banner"
        head="Test in Bangalore "
        highlight="TMT "
        para="Accurate insights to keep your health moving forward"
        bread="TMT Test"
      />
      <TmtContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <TmtContentFooter/>
    </div>
  );
}
