import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import neurologist from "@/Images/Consultation/neuro.png"
export const metadata = {
  title: "Neurology Consultant in Bangalore | Cardiologist near Me",
  description:
    "Neurology Consultant in Bangalore is essential for individuals dealing with neurological disorders, as these conditions require expert care and accurate diagnosis.",
  canonical: "https://diagnosticscenter.co.in/neurology-consultant-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function NeurologistConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={neurologist.src}
        alt="neurology  Banner"
        title="Consultation in Bangalore"
        highlight="Neurology "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Neurology Consultation "
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
