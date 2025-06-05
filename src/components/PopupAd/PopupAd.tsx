"use client";
import React, { useEffect, useState } from "react";
import "./PopupAd.css";
import { FaXmark } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const PopupAd = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

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
        <h2 className="popup-heading">🚀 BizGen Website Package</h2>
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
  );
};

export default PopupAd;
