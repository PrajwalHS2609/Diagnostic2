import Link from "next/link";
import React from "react";

const FooterConsultation = () => {
  return (
    <div className="footerList-container">
      <h4>Consultation</h4>
      <ul>
        <li>
          <Link href="/diabetologist-consultant-in-bangalore">
            Diabetologist
          </Link>
        </li>
        <li>
          <Link href="/gynaecologist-consultant-in-bangalore">
            Gynaecologist
          </Link>
        </li>
        <li>
          <Link href="/cardiologist-consultant-in-bangalore">Cardiologist</Link>
        </li>
        <li>
          <Link href="/obstetrics-consultation-in-bangalore">Obstetrics</Link>
        </li>
        <li>
          <Link href="/gastroenterology-consultation-in-bangalore">
            Gastroenterology
          </Link>
        </li>
        <li>
          <Link href="/neurology-consultation-in-bangalore">Neurology</Link>
        </li>
        <li>
          <Link href="/urology-consultation-in-bangalore">Urology</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterConsultation;
