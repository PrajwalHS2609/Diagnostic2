import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import "@/components/Blog/Blog.css";
import { IoIosArrowForward } from "react-icons/io";
import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import blogBanner from "@/Images/BlogBanner.png";

// 🧠 CATEGORY POSTS GROQ QUERY
const CATEGORY_POSTS_QUERY = `
  *[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    categories[]->{
      title,
      slug
    },
    mainImage {
      asset-> {
        url
      }
    }
  }
`;
export const revalidate = 0;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category.toLowerCase();

  const posts = await client.fetch<SanityDocument[]>(CATEGORY_POSTS_QUERY, {
    category,
  });

  return (
    <div className="main-container">
      <ConsultationHeader
        imageSrc={blogBanner.src}
        alt="Blog  Banner"
        title=" Page"
        highlight="Blog "
        para="Latest Posts & Articles"
        bread="Blog "
      />
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
        {category.toUpperCase()}
      </h2>
      <div className="blog-subContainer">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="blogCard-content" key={post._id}>
              <div className="blogCard-imgContent">
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={550}
                    height={310}
                    className="rounded-md object-cover aspect-video"
                  />
                )}
              </div>
              <div className="blogCard-txtContent">
                <Link href={`/${post.slug.current}`}>
                  <h4>{post.title}</h4>
                </Link>
                <p>{post.description}</p>
                <Link href={`/${post.slug.current}`}>
                  <button>
                    Read More <IoIosArrowForward className="blogCard-icon" />
                  </button>
                </Link>
                <div className="blogCard-design">
                  <div className="blogCard-innerDesign"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>
    </div>
  );
}

// ✅ Will be picked up by App Router
export async function generateStaticParams() {
  const categories = await client.fetch(`*[_type == "category"]{ slug }`);
  return categories.map((cat: { slug: { current: string } }) => ({
    category: cat.slug.current,
  }));
}
