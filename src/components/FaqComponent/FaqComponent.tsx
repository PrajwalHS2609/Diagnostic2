"use client";

import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { client } from "@/sanity/client";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import "./FaqComponent.css";

export const revalidate = 0;

type FaqItem = {
  question: string;
  answer: PortableTextBlock[];
};

type FaqData = {
  title?: string;
  items: FaqItem[];
};

// Optional: fetch default FAQ if no prop is passed
const faqQuery = `
*[_type == "faq"][0]{
  title,
  items[] {
    question,
    answer
  }
}
`;

const portableTextComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="faq-list">{children}</ul>,
    number: ({ children }) => <ol className="faq-list">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="faq-list-item">{children}</li>,
    number: ({ children }) => <li className="faq-list-item">{children}</li>,
  },
  block: {
    normal: ({ children }) => <p className="faq-text">{children}</p>,
  },
};

// ✅ Accept optional faqs prop
interface FaqComponentProps {
  faqs?: FaqItem[];
  title?: string;
}

const FaqComponent: React.FC<FaqComponentProps> = ({ faqs, title }) => {
  const [faqData, setFaqData] = useState<FaqData | null>(
    faqs ? { title, items: faqs } : null
  );

  useEffect(() => {
    if (!faqs) {
      client.fetch(faqQuery).then((data: FaqData) => {
        setFaqData(data);
      });
    }
  }, [faqs]);

  if (!faqData || !faqData.items || faqData.items.length === 0) return null;

  return (
    <div className="faq-container">
      <div className="faq-content">
        {faqData.title && <h2>{faqData.title}</h2>}
        <br />
        <Accordion defaultActiveKey="0" className="acc-Container">
          {faqData.items.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="acc-item"
            >
              <Accordion.Header className="acc-header">
                <b>{item.question}</b>
              </Accordion.Header>
              <Accordion.Body className="acc-body">
                <PortableText
                  value={item.answer}
                  components={portableTextComponents}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqComponent;
