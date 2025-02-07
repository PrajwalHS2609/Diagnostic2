"use client";
import Link from "next/link";
import "./NavBar.css";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Menu() {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  const [drop, setDrop] = useState(false);

  const dropRef = useRef<HTMLDivElement | null>(null);
  const dropRef2 = useRef<HTMLDivElement | null>(null);
  const subDropRef = useRef<HTMLDivElement | null>(null);

  const showSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "fit-content";
    sideBar.style.visibility = "visible";
    sideBar.style.opacity = "1";
    sideBar.style.transform = "translateX(0px)";
    exit.style.display = "block";
  };
  const hideSideBar = () => {
    const exit = document.querySelector(".exit") as HTMLElement;
    const sideBar = document.querySelector(".resp-Menu") as HTMLElement;
    // sideBar.style.height = "0%";
    sideBar.style.visibility = "hidden";
    sideBar.style.opacity = "0";
    sideBar.style.transform = "translateX(100%)";
    exit.style.display = "none";
  };
  const handleDrop = () => {
    const arrow = document.querySelector(
      ".menuDrop-arrowIco"
    ) as HTMLElement | null;

    // Ensure dropRef.current is not null
    if (dropRef.current) {
      if (!drop) {
        setDrop(true);
        dropRef.current.style.display = "flex"; // Safe to access

        if (arrow) {
          arrow.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef.current.style.display = "none"; // Safe to access

        if (arrow) {
          arrow.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };

  const handleConsultDrop = () => {
    const arrow = document.querySelector(
      ".menuDrop-arrowIco"
    ) as HTMLElement | null;

    // Ensure dropRef.current is not null
    if (dropRef2.current) {
      if (!drop) {
        setDrop(true);
        dropRef2.current.style.display = "flex"; // Safe to access

        if (arrow) {
          arrow.style.transform = "rotate(45deg)";
        }
      } else {
        setDrop(false);
        dropRef2.current.style.display = "none"; // Safe to access

        if (arrow) {
          arrow.style.transform = "rotate(0)";
        }
      }
    } else {
      console.error("dropRef is null or not attached to an element");
    }
  };

  const handleDrop2 = () => {
    const arrow = document.querySelector(
      ".menuDrop-arrowIco"
    ) as HTMLElement | null;

    // Ensure subDropRef.current is not null
    if (subDropRef.current) {
      if (!drop) {
        setDrop(true);
        // Change display style
        subDropRef.current.style.display = "none";
        console.log("up");
        // Optionally manipulate the arrow
        if (arrow) arrow.classList.add("rotate"); // Example of adding a class to the arrow
      } else {
        setDrop(false);
        subDropRef.current.style.display = "flex";
        console.log("down");
        // Optionally manipulate the arrow
        if (arrow) arrow.classList.remove("rotate"); // Example of removing a class
      }
    } else {
      console.error("subDropRef is null or not attached to an element");
    }
  };
  return (
    <nav className="menu-container">
      <div className="menu-content1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          Services
          <IoIosArrowDown className="menu-arrowIco" />
          <div className="menuDrop-container">
            <ul>
              <li>
                <Link href="/pathology">Pathology</Link>
              </li>
              <li>
                <Link href="/ultrasound-scan">UltraSound</Link>
                {/* <MdKeyboardArrowRight className="menuDrop-arrowIco" /> */}
              </li>
              <li>
                <Link href="/doppler-scan">Doppler Scan</Link>
                {/* <MdKeyboardArrowRight className="menuDrop-arrowIco" /> */}
              </li>
              <li id="cardiologyDrop">
                <Link href="/cardiology-test">Cardiology</Link>
                <MdKeyboardArrowRight className="menuDrop-arrowIco" />
                <div className="subMenu-drop">
                  <ul>
                    <li>
                      <Link href="/ecg-test">ECG</Link>
                    </li>
                    <li>
                      <Link href="/echo-test">ECHO</Link>
                    </li>
                    <li>
                      <Link href="/tmt-test">TMT</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/health-packages">Health Packages</Link>
        </li>
        <li>
          Consultation
          <IoIosArrowDown className="menu-arrowIco" />
          <div className="menuDrop-container">
            <ul>
              <li>
                <Link href="/diabetologist-consultation-in-bangalore">
                  Diabetologist
                </Link>
              </li>
              <li>
                <Link href="/gynecologist-consultation-in-bangalore">
                  Gynaecologist
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </div>
      <div className="menu-content2">
        <MdMenu className="menuIcon" onClick={showSideBar} />
        <div className="resp-Menu">
          <div className="inner-RespMenu">
            <li>
              <div className="inner-RespMenuHead">
                {/* <Image src={logo} alt="logo" className="exit" /> */}

                <HiMiniXMark
                  className="innerResp-MenuHeadIco"
                  onClick={hideSideBar}
                />
              </div>{" "}
              <Link href="/" onClick={hideSideBar}>
                Home
              </Link>
            </li>

            <li>
              <div className="respMenuList">
                Services
                <span>
                  <IoIosArrowDown
                    className="menu-arrowIco"
                    onClick={handleDrop}
                  />
                </span>
              </div>
              {/* ---------------------------respDropDown-------------------------------------------- */}
              <div className="respDrop" ref={dropRef}>
                <ul>
                  <li>
                    <Link href="/pathology" onClick={hideSideBar}>
                      Pathology
                    </Link>
                  </li>
                  <li>
                    <Link href="/ultrasound-scan" onClick={hideSideBar}>
                      UltraSound
                    </Link>
                    {/* <MdKeyboardArrowRight className="menuDrop-arrowIco" /> */}
                  </li>
                  <li>
                    <Link href="/doppler-scan" onClick={hideSideBar}>
                      Doppler Scan
                    </Link>
                    {/* <MdKeyboardArrowRight className="menuDrop-arrowIco" /> */}
                  </li>
                  <li id="resp-cardiology">
                    <span>
                      <Link href="/cardiology-test" onClick={hideSideBar}>
                        Cardiology
                      </Link>
                      <IoIosArrowDown
                        className="menuDrop-arrowIco"
                        onClick={handleDrop2}
                      />
                    </span>
                    <div className="resp-subMenu" ref={subDropRef}>
                      <ul>
                        <li>
                          <Link href="/ecg-test" onClick={hideSideBar}>
                            ECG
                          </Link>
                        </li>
                        <li>
                          <Link href="/echo-test" onClick={hideSideBar}>
                            ECHO
                          </Link>
                        </li>
                        <li>
                          <Link href="/tmt-test" onClick={hideSideBar}>
                            TMT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              {" "}
              <Link href="/health-packages" onClick={hideSideBar}>
                Health Packages
              </Link>
            </li>
            <li>
              <div className="respMenuList">
                <Link href="/">Consultation</Link>
                <span>
                  <IoIosArrowDown
                    className="menu-arrowIco"
                    onClick={handleConsultDrop}
                  />
                </span>
              </div>
              <div className="respDrop" ref={dropRef2}>
                <ul>
                  <li>
                    <Link
                      href="/diabetologist-consultation-in-bangalore"
                      onClick={hideSideBar}
                    >
                      Diabetologist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gynecologist-consultation-in-bangalore"
                      onClick={hideSideBar}
                    >
                      Gynaecologist
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              {" "}
              <Link href="/about-us" onClick={hideSideBar}>
                About Us
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/contact-us" onClick={hideSideBar}>
                Contact Us
              </Link>
            </li>

            <li className="menuContainerBtn-Container">
              <div className="menuContainerBtn">
                {" "}
                <Link href="/">
                  <button onClick={handleAppointment}>Book Now </button>
                </Link>
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
