import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import GynaecologistContentFooter from "@/components/Consultation/GynaecologistConsultation/GynaecologistContentFooter";
import GynaecologistContentHead from "@/components/Consultation/GynaecologistConsultation/GynaecologistContentHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import gynecologist from "@/Images/Consultation/Gynaecologist.png"
export const metadata = {
  title: "Gynaecologist Consultant in Bangalore | Gynaecologist near Me",
  description:
    "Gynaecologist Consultant in Bangalore is a crucial role in diagnosing and treating various conditions related to the female reproductive system. ",
  canonical: "https://diagnosticscenter.co.in/gynaecologist-consultant-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function GynecologistConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={gynecologist.src}
        alt="Gynecologist  Banner"
        title="Consultation in Bangalore"
        highlight="Gynecologist "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Gynecologist Consultation "
      />
      <GynaecologistContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <GynaecologistContentFooter/>
    </div>
  );
}
