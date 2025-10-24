import { PortableText, PortableTextBlock } from "next-sanity";
import BlogSidebar from "../Blog/BlogSidebar/BlogSidebar";
import FaqComponent from "../FaqComponent/FaqComponent";
import Image from "next/image";
import { portableTextComponents } from "../PortableTextComponents";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type PostContentType = {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
};
export default function PostContent({ content }: { content: PostContentType }) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;
  return (
    <div className="blog-container">
      <div className="blog-wrapper1">
        {imageUrl && (
          <Image src={imageUrl} alt={content.title} width={550} height={310} />
        )}
        <h1 className="blogHead-content">{content.title}</h1>

        <div className="blogHead-content">
          <PortableText
            value={content.body}
            components={portableTextComponents}
          />
        </div>

        {youtubeUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={
                youtubeUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                  : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
              }
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {Array.isArray(content?.faq) && content.faq.length > 0 && (
          <FaqComponent faqs={content.faq} />
        )}
      </div>

      <div className="blog-wrapper2">
        <BlogSidebar />
      </div>
    </div>
  );
}
