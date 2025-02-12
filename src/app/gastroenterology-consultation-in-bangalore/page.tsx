import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import gastroenterology from "@/Images/Consultation/Gastroenterology.png"
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
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
