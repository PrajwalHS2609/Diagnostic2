import React from "react";
import "./Blog.css";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && defined(slug.current)
  ]|order(publishedAt desc)[0...100]{
  _id,
  title,
  description,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;
export default async function BlogCard() {
  const posts = await client.fetch<SanityDocument[]>(POST_QUERY, {});

  return (
    <div className="blogCard-container">
      {posts.map((post) => (
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
      ))}
    </div>
  );
}
