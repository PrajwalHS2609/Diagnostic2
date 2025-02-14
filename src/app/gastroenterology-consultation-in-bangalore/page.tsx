import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import GastroenterologyContentFooter from "@/components/Consultation/GastroenterologyConsultation/GastroenterologyContentFooter";
import GastroenterologyContentHead from "@/components/Consultation/GastroenterologyConsultation/GastroenterologyContentHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import gastroenterology from "@/Images/Consultation/Gastroenterology.png";
export const metadata = {
  title: "Gastroenterology Consultant in Bangalore | Gastroenterology near Me",
  description:
    "Gastroenterology Consultant in Bangalore is essential for individuals dealing with neurological disorders, as these conditions require expert care and accurate diagnosis.",
  canonical:
    "https://diagnosticscenter.co.in/gastroenterology-consultant-in-bangalore ",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function GastroenterologyConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={gastroenterology.src}
        alt="Gastroenterology  Banner"
        title="Consultation in Bangalore"
        highlight="Gastroenterology "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Gastroenterology "
      />
      <GastroenterologyContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <GastroenterologyContentFooter/>
    </div>
  );
}
