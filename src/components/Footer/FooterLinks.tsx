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
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Consultation</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
