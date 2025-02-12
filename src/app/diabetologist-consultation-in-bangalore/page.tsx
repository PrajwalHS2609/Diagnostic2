import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import diabetologist from "@/Images/Consultation/Diabetologist.png"
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
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
