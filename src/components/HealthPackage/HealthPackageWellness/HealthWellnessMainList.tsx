import Link from "next/link";
import "./../HealthPackage.css";
const HealthWellnessMainList = () => {
  return (
    <div className="healthWellnessMainList">
      <ul>
        <li>1. Comprehensive Health Check-Up for Him & Her</li>
        <li>
          2. Personalized Consultations with Experienced Healthcare
          Professionals.
        </li>
        <li>3. Full Body Wellness Assessment</li>
        <li>4. Advanced Diagnostic Tests Included</li>
        <li>5. Nutritional Guidance for a Healthier Lifestyle</li>
        <li>6. Wellness Report with Actionable Insights</li>
      </ul>
      <p>
        🔥 Hurry, this limited-time offer is designed to set you on a path to
        vitality and well-being! Don’t miss out on the opportunity to invest in
        your health.
      </p>
     <div className="healthWellnessMainList-btn"><Link href="/"> <button>Make An Appointment</button></Link></div>
    </div>
  );
};

export default HealthWellnessMainList;
