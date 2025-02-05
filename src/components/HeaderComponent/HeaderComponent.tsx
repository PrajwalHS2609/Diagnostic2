import Image from "next/image";
import React from "react";
import "./HeaderComponent.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Link from "next/link";

interface HeaderProps {
  imageSrc: string;
  alt: string;
  head: string;
  highlight: string;
  para: string;
  bread: string;
}
const HeaderComponent = ({
  imageSrc,
  alt,
  head,
  highlight,
  para,
  bread,
}: HeaderProps) => {
  return (
    <div className="headerComponent-container">
      <div className="headerComponent-imgContainer">
        <Image src={imageSrc} alt={alt} width={500} height={500} />
      </div>
      <div className="headerComponent-cover">
        <div className="headerComponent-coverContent">
          <h2>
            {head} <span>{highlight}</span>
          </h2>
          <p>{para}</p>
        </div>
        <span>
          <h5>
            <Link href="/">Home</Link>
          </h5>
          <h5>
            <MdOutlineDoubleArrow />
          </h5>
          <h5>{bread}</h5>
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
