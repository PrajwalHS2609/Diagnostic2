import React from "react";
import "./HomeBlog.css";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

export const revalidate = 0;

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  description,
  mainImage{
    ...,
    asset->{
      _id,
      url
    }
  }
}`;
export default async function homeBlogCard() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <>
      {posts.map((posts) => (
        <div className="homeBlogCard-container" key={posts.id}>
          <Link href={`/${posts.slug.current}`}>
            <img src={posts.mainImage.asset.url} alt={posts.title} />
            <div className="homeBlogCard-content">
              <div className="homeBlogCard-item">
                <h5>{posts.title}</h5>
                <p>{posts.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
