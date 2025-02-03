import Image from "next/image";
import logo from "@/Images/logo.png"
export default function Logo() {
  return (
    <div className="logo-container">
      <Image src={logo} alt="logo" />
    </div>
  );
}
