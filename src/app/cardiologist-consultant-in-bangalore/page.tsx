import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import cardiology from "@/Images/Consultation/cardio.png"
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
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
