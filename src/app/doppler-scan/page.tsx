import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import ultraSound1 from "@/Images/ultrasound/ultrasound1.png";
import ultraSound2 from "@/Images/ultrasound/ultrasound2.png";
import ultraSound3 from "@/Images/ultrasound/ultrasound3.png";
export default function DopplerScan(){
    return(
        <div className="page-container">
        <HeaderComponent
        imageSrc1={ultraSound1.src}
        imageSrc2={ultraSound2.src}
        imageSrc3={ultraSound3.src}
          alt="Doppler Banner"
          head="in Bangalore "
          highlight="Doppler Scan"
          para="Accurate insights to keep your health moving forward"
          bread="Doppler Scan"
        />
      </div>
    )
}