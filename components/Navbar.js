import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "./Link";
import logo from "./../public/Faculty-Logo.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuFoldLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  const navSectionRef = useRef(null);

  const closeNav = () => setIsNavToggled(false);
  console.log("rendered");

  return (
    <React.Fragment>
      <nav
        className="
        absolute z-10 
        w-full  h-24
        left-0 
        flex items-center justify-between 
        overflow-hidden
        pr-4 
    ">
        <div className="left-8">
          <Image
            src={logo}
            alt="Faculty of computing and Informatics"
            width={220}
            height={220}
          />
        </div>
        <button
          onClick={() => {
            setIsNavToggled(true);
          }}>
          <RiMenuFoldLine className="text-white text-3xl" />
        </button>
      </nav>

      <nav
        ref={navSectionRef}
        className={`
      fixed z-50
      h-screen w-full
      top-0 left-0
       overflow-hidden
       text-white
       transition duration-75 ease-out
       transform ${!isNavToggled ? "-translate-x-full" : ""}
        `}>
        <div
          onClick={closeNav}
          className=" 
            cursor-crosshair
            absolute top-0 left-0 
            h-screen w-full 
            bg-birch-500 bg-opacity-70"></div>
        <div
          className="
          overflow-auto 
          max-w-xs 
          h-full
          w-3/4
        bg-birch-500
          relative
          z-20
          ">
          <section className="flex items-center transform -translate-y-8">
            <Image
              src={logo}
              alt="Faculty of computing and Informatics"
              width={200}
              height={200}
            />
            <button onClick={closeNav} className="times">
              <VscChromeClose className="text-2xl opacity-90" />
            </button>
          </section>
          <ul
            className="
        divide-y divide-white divide-opacity-50 
        text-white
        px-8
        font-medium tracking-wider 
        ">
            <li>
              <NavLink link={"/"} className={" py-4 "}>
                Home
              </NavLink>
            </li>
            <li>
              <details
                className="
               outline-none cursor-pointer">
                <summary className="flex items-center gap-2  py-4">
                  Explore <IoIosArrowDown className=" text-lg" />
                </summary>
                <ul
                  className=" 
              text-sm 
              px-6 py-2 divide-y divide-white divide-opacity-50 
              opacity-80
              ">
                  <li>
                    <NavLink link={"/about-us"} className={" py-3 "}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink link={"/Staff-profile"} className={" py-3 "}>
                      Staff Profile
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink link={"/news-events"} className={" py-4 "}>
                News & Events
              </NavLink>
            </li>
            <li>
              <NavLink link={"/contact"} className={" py-4 "}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex text-white mt-10 justify-evenly">
            <div className=" border p-3 rounded-full">
              <FaFacebookF />
            </div>
            <div className=" border p-3 rounded-full">
              <FaLinkedinIn />
            </div>
            <div className=" border p-3 rounded-full">
              <FaInstagram />
            </div>
            <div className=" border p-3 rounded-full">
              <FaTwitter />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
