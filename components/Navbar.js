import React, { useState } from "react";
import Link from "./Link";
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
const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleOpenMenu = () => {
    setActive((active) => !active);
  };
  return (
    <nav className="relative grid grid-cols-3 items-center py-3 border-t-2 border-b-2 border-gray-500 px-7 tracking-wide">
      <div className="">Logo</div>
      <div className="col-span-2 text-right md:opacity-0 md:absolute">
        <button
          onClick={handleOpenMenu}
          className="border-2 border-gray-500 rounded-md px-2 py-1 tracking-wide">
          Menu
        </button>
      </div>
      <ul
        className={`absolute bg-white top-8 right-2/4 transition-opacity transform translate-y-24 ${
          active ? " opacity-100" : "opacity-0"
        } md:relative md:translate-y-0 md:opacity-100 md:right-0 md:top-0 md:grid md:grid-flow-col md:col-start-2 md:col-end-4 md:justify-end md:gap-10  
         `}>
        {NavData.map((el, index) => (
          <li key={index}>
            <Link link={el.link} text={el.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
