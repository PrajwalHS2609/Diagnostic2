import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import DiabetologistContentFooter from "@/components/Consultation/DiabetologistConsultation/DiabetologistContentFooter";
import DiabetologistContentHead from "@/components/Consultation/DiabetologistConsultation/DiabetologistContentHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import diabetologist from "@/Images/Consultation/Diabetologist.png"

export const metadata = {
  title: "Diabetologist Consultant in Bangalore | Diabetologist near Me",
  description:
    "Diabetologist Consultant in Bangalore is crucial for individuals seeking specialized care for diabetes management. Book an Appointment! ",
  canonical: "https://diagnosticscenter.co.in/diabetologist-consultant-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function ObstetricsConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={diabetologist.src}
        alt="Diabetologist  Banner"
        title="Consultation in Bangalore"
        highlight="Diabetologist "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Diabetologist "
      />
      <DiabetologistContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <DiabetologistContentFooter/>
    </div>
  );
}
