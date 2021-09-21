import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "./Link";
import logo from "./../public/Faculty-Logo.png";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
const NavData = [
  {
    href: "/",
    text: "home",
    // icon: <AiFillHome />,
  },
  {
    href: "/about",
    text: "about",
    // icon: <FaBookReader />,
  },
  {
    href: "/academics",
    text: "academics",
    // icon: <BiCalendarEvent />,
  },
  {
    href: "/contact",
    text: "contact",
    // icon: <TiContacts />,
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navLinkRef = useRef(null);

  useEffect(() => {
    // console.log(navLinkRef.current.getBoundingClientRect().height);
  }, []);

  const handleOpenMenu = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <React.Fragment>
      <nav
        className="
    absolute z-10 
    w-full h-24
    left-0 
    flex items-center justify-between 
    border-2 
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
        <div>
          <RiMenuFoldLine className="text-white text-3xl" />
        </div>
      </nav>
      <div
        className="
      absolute z-20 top-0 left-0 
      h-screen w-full 
      bg-birch-500 bg-opacity-70"></div>
      <nav
        className="
      absolute z-50
      h-screen max-w-xs w-3/4
      top-0 left-0
      bg-birch-500
      ">
        <Image
          src={logo}
          alt="Faculty of computing and Informatics"
          width={200}
          height={200}
        />
        <ul
          className="
        divide-y divide-white divide-opacity-50 
        text-white
        px-8
        font-medium tracking-wider 
        ">
          {NavData.map((link, id) => {
            return (
              <li key={id}>
                <NavLink link={link.href} className={" py-4 "}>
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
