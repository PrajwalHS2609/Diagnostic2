import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterService = () => {
  return (
    <div className="footerList-container">
      <h4>Services</h4>
      <ul>
        <li>
          <Link href="/">Pathology</Link>
        </li>
        <li>
          <Link href="/">3D Ultrasound</Link>
        </li>
        <li>
          <Link href="/">X-Ray</Link>
        </li>
        <li>
          <Link href="/">Cardiology</Link>
        </li>
        <li>
          <Link href="/">Radiology Procedure</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterService;
