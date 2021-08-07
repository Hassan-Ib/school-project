import { useState, useRef } from "react";
import { NavLink } from "./Link";
import { default as NavList } from "./NavLinkList";
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
    text: "news-events",
  },
  {
    link: "/events",
    text: "events",
  },
];

const linkHover = " hover:";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navLinkRef = useRef();

  const getNavLinkHeight = () => {
    console.log();
  };
  console.log(navLinkRef.current);

  const handleOpenMenu = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <nav
      className={` relative text-gray-100 bg-primary-900 text-lg grid grid-cols-3 items-center py-3 
      px-7 tracking-wider lg:px-16 h-16 lg:h-full
      transition-height duration-1000 ease-out lg:transform-none 
       overflow-hidden
      ${isActive ? " transition-height duration-1000 ease-out h-80" : ""}`}>
      <div className="">Logo</div>
      <div className="col-span-2 text-right lg:hidden ">
        <button
          onClick={handleOpenMenu}
          className="border-2 border-gray-200 rounded-md px-2 py-1 tracking-wide hover:border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <NavList ref={navLinkRef} active={isActive}>
        {NavData.map((el, index) => (
          <li key={index} className="w-full font-normal">
            <NavLink
              link={el.link}
              text={el.text}
              handleNavToggle={handleOpenMenu}
              className="inline-block w-full py-4 "
            />
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Navbar;
