import "./ContactUs.css";
export default function ContactUsForm() {
  return (
    <div className="contactUs-formContainer">
      <form action="">
        <div className="contactUs-formContent">
          <label htmlFor="">
            Name <span>*</span>
          </label>
          <div className="contactUs-formItem1">
            <input type="text" name="" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">
            Phone No <span>*</span>
          </label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">
            Email<span>*</span>
          </label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">Diagnostics Services</label>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="Pathology" />
            Pathology
          </div>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="UltraSound" />
            UltraSound Scan
          </div>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="Doppler" />
            Doppler Scanning
          </div>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="" />
            X-ray
          </div>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="" />
            Cardiology
          </div>
          <div className="contactUs-formRadio">
            <input type="radio" name="testType" id="" />
            Radiology Procedure
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">Specific Test</label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">Message </label>
          <div className="contactUs-formItem2">
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="contactUs-formBtn">
          <button>Book Now</button>
        </div>
      </form>
    </div>
  );
}
