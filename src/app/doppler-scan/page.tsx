import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

export default function DopplerScan(){
    return(
        <div className="page-container">
        <HeaderComponent
          imageSrc1={"/"}
          imageSrc2={"/"}
          imageSrc3={"/"}
          alt="Doppler Banner"
          head="in Bangalore "
          highlight="Doppler Scan"
          para="Accurate insights to keep your health moving forward"
          bread="Doppler Scan"
        />
      </div>
    )
}