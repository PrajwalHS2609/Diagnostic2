import React from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";

import type { PortableTextBlock } from "@portabletext/types";
import HomeAboutUs from "../HomePage/HomeAboutUs/HomeAboutUs";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeDoctor from "../HomePage/HomeDoctor/HomeDoctor";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import HomeKey from "../HomePage/HomeKey/HomeKey";
import ConsultationHeader from "../Consultation/ConsultationHeader/ConsultationHeader";
import FaqComponent from "../FaqComponent/FaqComponent";

export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};

export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string;
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
};

export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;

  return (
    <div className="main-container service-wrapper1">
      {imageUrl && (
        <ConsultationHeader
          imageSrc={imageUrl}
          alt={content.title}
          title={content.title}
          bread={content.title}
          highlight=" "
          para=""
        />
      )}

      <h1 className="head-container">{content.title}</h1>

      {content.body1 && (
        <div className="head-container">
          <PortableText
            value={content.body1}
            components={portableTextComponents}
          />
        </div>
      )}

      <div className="head-container">
        <HomeAboutUs />
        <HomeWhy />
        <HomeDoctor />
        <HomeTestimonial />
        <HomeKey />

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
      </div>

      {content.body2 && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <PortableText
              value={content.body2}
              components={portableTextComponents}
            />

            {content.customTable && (
              <div className="custom-table">
                {content.customTable.title && (
                  <h3>{content.customTable.title}</h3>
                )}
                <table>
                  <thead>
                    <tr>
                      {content.customTable.headers?.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.customTable.rows?.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.cells.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {Array.isArray(content?.faq) && content.faq.length > 0 && (
            <FaqComponent faqs={content.faq} />
          )}
        </div>
      )}
    </div>
  );
}
