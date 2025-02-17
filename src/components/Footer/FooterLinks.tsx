import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="footerList-container">
      <h4>Link</h4>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact Us">Contact Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
