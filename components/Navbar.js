import { useState, useRef, useEffect } from "react";
import { NavLink } from "./Link";
import { default as NavList } from "./NavLinkList";
import Image from "next/image";
const NavData = [
  {
    link: "/",
    text: "home",
  },

  {
    link: "/news",
    text: "news",
  },
  {
    link: "/events",
    text: "events",
  },
  {
    link: "/courses",
    text: "courses",
  },
  {
    link: "/about",
    text: "about us",
  },
];
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navLinkRef = useRef(null);

  useEffect(() => {
    console.log(navLinkRef.current.getBoundingClientRect().height);
  }, []);

  const handleOpenMenu = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <nav
      className={` relative text-gray-100 bg-primary-900 text-lg grid grid-cols-3 items-center py-3 
      px-7 tracking-wider lg:px-16 max-h-16 lg:h-full
      transition-maxHeight duration-500 ease-out lg:transform-none 
       overflow-hidden
      ${isActive ? "h-full max-h-96" : ""}`}>
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
      <NavList className={` mt-8 lg:mt-0`} ref={navLinkRef} active={isActive}>
        {NavData.map((el, index) => (
          <li key={index} className="w-full font-normal">
            <NavLink
              link={el.link}
              text={el.text}
              handleNavToggle={handleOpenMenu}
              className="inline-block w-full p-2 rounded-lg hover:bg-gray-700"
            />
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Navbar;
