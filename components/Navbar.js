import React, { useState } from "react";
import { NavLink } from "./Link";
import Image from "next/image";
const NavData = [
  {
    link: "/",
    text: "home",
  },
  {
    link: "/courses",
    text: "courses",
  },
  {
    link: "/about",
    text: "about us",
  },
  {
    link: "/news",
    text: "news",
  },
  {
    link: "/events",
    text: "events",
  },
];

const linkHover = " hover:";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleOpenMenu = () => {
    console.log(active);
    setActive((active) => !active);
  };
  return (
    <nav className="relative bg-gradient-to-br from-indigo-800  to-blue-800 text-white text-lg grid grid-cols-3 items-center py-3 px-7 tracking-wider">
      <div className="">Logo</div>
      <div className="col-span-2 text-right md:opacity-0 md:absolute">
        <button
          onClick={handleOpenMenu}
          className="border-2 border-gray-100 rounded-md px-2 py-1 tracking-wide">
          Menu
        </button>
      </div>
      <ul
        className={`absolute          
        p-4 
        transition-opacity 
         inset-x-2/4
         cur
        border-2 
        w-2/4 
        text-indigo-600 
        transform 
        ${active ? " opacity-100 z-10" : "opacity-0 "} 
        md:relative 
        md:translate-y-0 
        md:opacity-100 
        md:right-0 
        md:top-0 
        md:grid 
        md:grid-flow-col 
        md:col-start-2 
        md:col-end-4 
        md:justify-end 
        md:gap-10  
         `}>
        {NavData.map((el, index) => (
          <li key={index}>
            <NavLink
              link={el.link}
              text={el.text}
              className=" hover:border-white"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
