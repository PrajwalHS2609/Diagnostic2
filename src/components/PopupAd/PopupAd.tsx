"use client";
import React, { useEffect, useState } from "react";
import "./PopupAd.css";
import { FaXmark } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const PopupAd = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname(); // 👈 detect route

  useEffect(() => {
    setShowPopup(false); // Reset first

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); // 8 seconds

    return () => clearTimeout(timer); // Clear timeout on route change
  }, [pathname]); // 👈 run effect on each page change

  const handleExit = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;
  return (
    <div className="popup-container">
      <div className="popupExit">
        <FaXmark className="exit" onClick={handleExit} />
      </div>

      <div className="popup-content">
        <div className="popup-imgContainer">
          <img
            src="https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_items_boosted&w=740"
            alt=""
          />
        </div>
        <div className="popup-contentWrapper">
          <h2 className="popup-heading outlined-heading">
            🚀 BizGen Website Package
          </h2>
          <h4 className="popup-subheading">
            <span className="highlight">Launch in 24 Hrs</span> <br />
            Only <span className="price">₹25,000</span> for a{" "}
            <strong>fully-loaded, digital-ready</strong> website!
          </h4>
          <p className="popup-disclaimer">
            This site is for sale. Please avoid inquiries about services.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=916360226773"
            target="_blank"
            rel="noopener noreferrer"
            className="popup-whatsapp"
          >
            <FaWhatsapp className="popup-whatsIcon" />
            <span>Grab This Deal</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
