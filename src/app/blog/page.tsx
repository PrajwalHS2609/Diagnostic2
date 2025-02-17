import BlogCard from "@/components/Blog/BlogCard";
import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import blogBanner from "@/Images/BlogBanner.png";
export default function Blog() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={blogBanner.src}
        alt="Blog  Banner"
        title=" Page"
        highlight="Blog "
        para="Latest Posts & Articles"
        bread="Blog "
      />
      <BlogCard />
    </div>
  );
}
