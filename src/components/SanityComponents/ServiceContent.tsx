import React from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import "@/components/Style/style.css";
import type { PortableTextBlock } from "@portabletext/types";
import HomeAboutUs from "../HomePage/HomeAboutUs/HomeAboutUs";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeDoctor from "../HomePage/HomeDoctor/HomeDoctor";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import HomeKey from "../HomePage/HomeKey/HomeKey";
import ConsultationHeader from "../Consultation/ConsultationHeader/ConsultationHeader";
import FaqComponent from "../FaqComponent/FaqComponent";
import PregnancyUltrasoundServices from "../UltrasoundSubServices/PregnancyUltrasoundServices/PregnancyUltrasoundServices";
import AbdominalUltrasound from "../UltrasoundSubServices/AbdominalUltrasound/AbdominalUltrasound";
import VascularUltrasoundService from "./../UltrasoundSubServices/VascularUltrasoundService/VascularUltrasoundService";
export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};

export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string | { current: string }; // ✅ handles both string or object cases
  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
};
const serviceComponents: Record<string, React.ReactNode> = {
  // ----------------------Pregnancy Ultrasound--------------------------
  "pregnancy-ultrasound-in-bangalore": <PregnancyUltrasoundServices />,
  "anomaly-scan-in-bangalore": <PregnancyUltrasoundServices />,
  "dating-scan-in-bangalore": <PregnancyUltrasoundServices />,
  "fetal-echocardiogram-in-bangalore": <PregnancyUltrasoundServices />,
  "nt-scan-in-bangalore": <PregnancyUltrasoundServices />,
  "3d-and-4d-fetal-scan-in-bangalore": <PregnancyUltrasoundServices />,

  // ------------------Abdominal Ultrasound----------------------
  "abdominal-ultrasound-in-bangalore": <AbdominalUltrasound />,
  "endoscopic-ultrasound-in-bangalore": <AbdominalUltrasound />,
  "duplex-ultrasound-in-bangalore": <AbdominalUltrasound />,
  "triplex-ultrasound-in-bangalore": <AbdominalUltrasound />,

  // ------------------Vascular Ultrasound----------------------
  "vascular-ultrasound-in-bangalore": <VascularUltrasoundService />,
  "carotid-duplex-ultrasound-in-bangalore": <VascularUltrasoundService />,
  "venous-duplex-ultrasound-in-bangalore": <VascularUltrasoundService />,
  "arterial-duplex-ultrasound-in-bangalore": <VascularUltrasoundService />,
  "aortic-ultrasound-in-bangalore": <VascularUltrasoundService />,
  "renal-artery-duplex-ultrasound-in-bangalore": <VascularUltrasoundService />,
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
      <div className="page-container">
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

        <div className="diagnosticsHead-container">
          <h1 className="head-container">{content.title}</h1>

          {content.body1 && (
            <PortableText
              value={content.body1}
              components={portableTextComponents}
            />
          )}
        </div>
        <>
          {serviceComponents[
            typeof content.slug === "string"
              ? content.slug
              : content.slug?.current
          ] ?? null}{" "}
          <HomeAboutUs />
          <HomeWhy />
          <HomeDoctor />
          <HomeTestimonial />
          <HomeKey />
        </>
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

        <div className="diagnosticsHead-container">
          {content.body2 && (
            <>
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

              {Array.isArray(content?.faq) && content.faq.length > 0 && (
                <FaqComponent faqs={content.faq} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
