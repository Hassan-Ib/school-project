import { useState, useRef, useEffect } from "react";
import { NavLink } from "./Link";
import { AiFillHome } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";

const NavData = [
  {
    href: "/",
    text: "home",
    icon: <AiFillHome />,
  },
  {
    href: "/about",
    text: "about",
    icon: <FaBookReader />,
  },
  {
    href: "/academics",
    text: "academics",
    icon: <BiCalendarEvent />,
  },
  {
    href: "/contact",
    text: "contact",
    icon: <TiContacts />,
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
      className={`text-gray-100 bg-primary-900 text-lg grid grid-cols-3 
      items-center py-3 
      px-7 tracking-wider `}>
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

      <div
        className="
        absolute 
        top-0
        right-0
        h-screen
        z-10
         bg-primary-900
         grid
          place-items-center
          w-1/2                  
        ">
        {/* <button></button> */}
        <ul
          className={`
           
           `}
          ref={navLinkRef}>
          {NavData.map((link, index) => (
            <li key={index} className="w-full font-normal">
              <NavLink
                link={link.href}
                text={link.text}
                icon={link.icon}
                handleNavToggle={handleOpenMenu}
                className="w-full p-2 rounded-lg font-semibold hover:bg-gray-700"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
