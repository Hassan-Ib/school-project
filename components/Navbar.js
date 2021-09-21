import { useState, useRef, useEffect } from "react";
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
    <nav className="absolute z-10 -top-12">
      <div className="-top-10 left-8">
        <Image
          src={logo}
          alt="Faculty of computing and Informatics"
          width={220}
          height={220}
        />
      </div>

      <div>
        <RiMenuFoldLine />
      </div>
    </nav>
  );
};

export default Navbar;
