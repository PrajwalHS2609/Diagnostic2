import { PortableText, type PortableTextReactComponents } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
// CSS for both post and service
import "@/components/Blog/Blog.css";
import "@/components/Style/style.css";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import BlogSidebar from "@/components/Blog/BlogSidebar/BlogSidebar";
import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import sanityServiceBanner from "@/Images/sanityServiceBanner.png";

export const revalidate = 0;

// PortableText components with proper key props
const portableTextComponents: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children, value }) => <li key={value._key}>{children}</li>,
    number: ({ children, value }) => <li key={value._key}>{children}</li>,
  },
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body1,
  body2,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const content = post || service;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const content = post || service;

  if (!content) notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const isPost = !!post;

  return (
    <div className={isPost ? "blog-container" : "main-container"}>
      <div className={isPost ? "blog-wrapper1" : "page-container"}>
        {isPost && imageUrl ? (
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            width={550}
            height={310}
          />
        ) : isPost ? (
          <p className="image-fallback">Image not available</p>
        ) : null}

        {!isPost && (
          <ConsultationHeader
            imageSrc={sanityServiceBanner.src}
            alt="sanity Service Banner"
            title={content.title}
            highlight=" "
            para=""
            bread={content.title}
          />
        )}

        <div
          className={isPost ? "blogHead-content" : "diagnosticsHead-container"}
        >
          <div className={isPost ? "blogHead-content" : "Head-container"}>
            <h1>{content.title}</h1>

            {isPost && Array.isArray(content.body) && (
              <PortableText
                value={content.body}
                components={portableTextComponents}
              />
            )}
          </div>

          {!isPost && Array.isArray(content.body1) && (
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
          )}
        </div>

        {!isPost && Array.isArray(content.body1) && (
          <>
            <HomeAboutUs />
            <HomeWhy />
            <HomeDoctor />
            <HomeTestimonial />
            <HomeKey />
          </>
        )}

        <div
          className={isPost ? "blogHead-content" : "diagnosticsHead-container"}
        >
          {!isPost && Array.isArray(content.body2) && (
            <PortableText
              value={content.body2}
              components={portableTextComponents}
            />
          )}
        </div>
      </div>

      {isPost && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}

type SlugType = { slug: { current: string } };

export async function generateStaticParams() {
  const postSlugs = await client.fetch<SlugType[]>(
    `*[_type == "post"]{ slug }`
  );
  const serviceSlugs = await client.fetch<SlugType[]>(
    `*[_type == "ServiceCategory"]{ slug }`
  );

  return [...postSlugs, ...serviceSlugs].map((item) => ({
    slug: item.slug.current,
  }));
}
