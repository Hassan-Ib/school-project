import { useState, useEffect } from "react";
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
    text: "news/events",
  },
  // {
  //   link: "/events",
  //   text: "events",
  // },
];

const linkHover = " hover:";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <nav className="relative  text-gray-700 text-lg grid grid-cols-3 items-center py-3 px-7 tracking-wider">
      <div className="">Logo</div>
      <div className="col-span-2 text-right lg:hidden ">
        <button
          onClick={handleOpenMenu}
          className="border-2 border-gray-900 rounded-md px-2 py-1 tracking-wide hover:border-gray-300">
          Menu
        </button>
      </div>
      <NavList active={isActive}>
        {NavData.map((el, index) => (
          <li key={index} className="w-full text-center font-medium ">
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
