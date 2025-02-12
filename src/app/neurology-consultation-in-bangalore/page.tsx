import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import neurologist from "@/Images/Consultation/neuro.png"
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
