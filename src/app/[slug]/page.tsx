import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

import PostContent, {
  PostContentType,
} from "../../components/SanityComponents/Post";
import ServiceContent, {
  ServiceContentType,
} from "../../components/SanityComponents/ServiceContent";

// ✅ Combined Query for Post Page (with Global Carousel)
const POST_QUERY = `{
  "post": *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    mainImage { asset->{ url } },
    youtubeVideoUrl,
    faq[] { question, answer }
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[] {
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

// ✅ Query for Service Page (with Global Carousel)
const SERVICE_QUERY = `{
  "service": *[_type == "ServiceCategory" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body1,
    body2,
    metaTitle,
    metaDescription,
    mainImage { asset->{_id, url} },
    youtubeVideoUrl,
    faq,
    customTable
  },
  "carouselBlock": *[_type == "carouselBlock"][0]{
    title,
    images[] {
      alt,
      caption,
      link,
      asset->{ url }
    }
  }
}`;

export const revalidate = 0;

// ✅ Type Definitions
type SlugParams = { slug: string };

type CarouselImage = {
  alt?: string;
  caption?: string;
  link?: string;
  asset?: { url?: string };
};

type CarouselBlock = {
  title?: string;
  images?: CarouselImage[];
};

// ✅ Main Page Component
export default async function SlugPage({
  params: paramsPromise,
}: {
  params: Promise<SlugParams>;
}) {
  const { slug } = await paramsPromise;

  // 📰 Try to fetch Post + Global Carousel
  const postData: {
    post: PostContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(POST_QUERY, { slug });

  if (postData?.post) {
    return (
      <PostContent
        content={{
          ...postData.post,
          // ✅ Convert null → undefined to match component types
          carouselBlock: postData.carouselBlock ?? undefined,
        }}
      />
    );
  }

  // 🧩 Fetch Service + Global Carousel
  const serviceData: {
    service: ServiceContentType | null;
    carouselBlock: CarouselBlock | null;
  } = await client.fetch(SERVICE_QUERY, { slug });

  if (serviceData?.service) {
    return (
      <ServiceContent
        content={{
          ...serviceData.service,
          carouselBlock: serviceData.carouselBlock ?? undefined, // ✅ Fixed
        }}
      />
    );
  }

  // 🚫 Not Found
  notFound();
}
