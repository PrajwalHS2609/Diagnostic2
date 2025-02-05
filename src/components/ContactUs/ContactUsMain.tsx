import React from "react";
import "./ContactUs.css";
import ContactUsForm from "./ContactUsForm";
import ContactUsAddress from "./ContactAddress";

const ContactUsMain = () => {
  return (
    <div className="contactUsMain-container">
      <div className="contactUsMain-content">
        <ContactUsAddress />
      </div>
      <div className="contactUsMain-content">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsMain;
