import CardiologyContentFooter from "@/components/Consultation/CardiologyConsultation/CardiologyContentFooter";
import CardiologyContentHeader from "@/components/Consultation/CardiologyConsultation/CardiologyContentHeader";
import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import cardiology from "@/Images/Consultation/cardio.png";
export const metadata = {
  title: "Cardiologist Consultant in Bangalore | Cardiologist near Me",
  description:
    "Cardiologist Consultant in Bangalore is a crucial role in diagnosing and treating various conditions related to the female reproductive system. ",
  canonical:
    "https://diagnosticscenter.co.in/cardiologist-consultant-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function CardiologistConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={cardiology.src}
        alt="Cardiology  Banner"
        title="Consultation in Bangalore"
        highlight="Cardiology "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Cardiology "
      />
      <CardiologyContentHeader />
      <HomeAboutUs />
      <HomeWhy />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeKey />
      <CardiologyContentFooter />
    </div>
  );
}
