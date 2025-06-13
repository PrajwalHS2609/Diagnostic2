import React from "react";
import "./Button.css";
import { FaWhatsapp } from "react-icons/fa";
const Button = () => {
  return (
    <button className="btn-donate" id="button-container">
      <a href="https://api.whatsapp.com/send?phone=916360226773">
        <FaWhatsapp className="popup-whatsIcon" />
      </a>
      Grab This Deal
    </button>
  );
};

export default Button;
