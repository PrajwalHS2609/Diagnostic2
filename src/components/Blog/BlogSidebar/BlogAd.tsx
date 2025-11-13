// "use client";
// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import "./../Blog.css";

// const builder = imageUrlBuilder(client);
// function urlFor(source: any) {
//   return builder.image(source).url();
// }

// type BlogAdImage = {
//   asset?: { _ref?: string; url?: string };
//   alt?: string;
//   link?: string;
// };

// type BlogAdBlock = {
//   title?: string;
//   ads?: BlogAdImage[];
// };

// const BlogAd = () => {
//   const [adBlock, setAdBlock] = useState<BlogAdBlock | null>(null);

//   useEffect(() => {
//     const fetchAds = async () => {
//       const data = await client.fetch(`
//         *[_type == "blogAdBlock"][0]{
//           title,
//           ads[]{
//             alt,
//             link,
//             asset->{_id, url}
//           }
//         }
//       `);
//       console.log("Fetched adBlock:", data);
//       setAdBlock(data);
//     };
//     fetchAds();
//   }, []);

//   if (!adBlock?.ads?.length) return null;

//   return (
//     <div className="blogAd-container">
//       {adBlock.ads.map((ad, i) => (
//         <div key={i} className="blogAd-item">
//           {ad.link ? (
//             <a href={ad.link} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={ad.asset?.url ? ad.asset.url : urlFor(ad.asset)}
//                 alt={ad.alt || `Ad ${i + 1}`}
//               />
//             </a>
//           ) : (
//             <img
//               src={ad.asset?.url ? ad.asset.url : urlFor(ad.asset)}
//               alt={ad.alt || `Ad ${i + 1}`}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogAd;
import React from "react";

const BlogAd = () => {
  return <div></div>;
};

export default BlogAd;
