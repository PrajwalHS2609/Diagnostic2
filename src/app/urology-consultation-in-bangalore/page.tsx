import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import UrologyContentFooter from "@/components/Consultation/UrologyConsultation/UrologyContentFooter";
import UrologyContentHead from "@/components/Consultation/UrologyConsultation/UrologyContentHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import urology from "@/Images/Consultation/Urology.png"
export const metadata = {
  title: "Urology Consultant in Bangalore | Urology near Me",
  description:
    "Urology Consultant in Bangalore is essential for those experiencing urinary tract issues, kidney-related concerns, or reproductive health problems.",
  canonical: "https://diagnosticscenter.co.in/urology-consultant-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function UrologyConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={urology.src}
        alt="Urology  Banner"
        title="Consultation in Bangalore"
        highlight="Urology "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Urology "
      />
      <UrologyContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <UrologyContentFooter/>
    </div>
  );
}
