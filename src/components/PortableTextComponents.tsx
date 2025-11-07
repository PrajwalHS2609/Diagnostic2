import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Build Sanity image URLs
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ✅ Define custom TypeScript interfaces
interface CustomTableRow {
  cells: string[];
}

interface CustomTableValue {
  title?: string;
  headers: string[];
  rows: CustomTableRow[];
}

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionBlockValue {
  title?: string;
  items: AccordionItem[];
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    // 🖼️ Image Renderer
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).width(800).height(500).url();

      return (
        <div className="portableImg">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      );
    },

    // 📊 Custom Table Renderer
    customTable: ({ value }: { value: CustomTableValue }) => {
      if (!value?.rows || !value?.headers) return null;

      return (
        <div className="custom-table">
          {value.title && <h3>{value.title}</h3>}

          <table className="customTable-table">
            <thead>
              <tr>
                {value.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {value.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    // 🔽 Accordion Renderer
    accordionBlock: ({ value }: { value: AccordionBlockValue }) => {
      if (!value?.items?.length) return null;

      return (
        <div className="custom-accordion">
          {value.title && <h3>{value.title}</h3>}
          {value.items.map((item, idx) => (
            <details key={idx} className="accordion-item">
              <summary className="accordion-title">{item.title}</summary>
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </details>
          ))}
        </div>
      );
    },
  },
};
