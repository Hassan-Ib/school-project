import React from "react";
import Image from "next/image";
import logo from "./../../public/img/LAUTECH-Logo.png";
import { NavLink, Link } from "../Link";
import { RiMenuFoldLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { SubNavLinkList, SubNav } from "./NavComponents";
import { links } from "./navData";

const DesktopNav = ({ showNav }) => {
  const detailRef = React.useRef(null);

  React.useEffect(() => {
    const detail = detailRef.current;
    console.log("detailRef", detail);
  }, []);

  return (
    <nav
      className="relative z-40 w-full h-20 left-0 flex items-center p-4 gap-6 bg-birch-500 text-birch-50
    ">
      {/* logo */}

      <div className="relative w-16 h-full">
        <Image
          src={logo}
          alt="Faculty of computing and Informatics"
          width="200"
          height="200"
          // layout="fill"
          priority
        />
      </div>
      <div className="flex-1"></div>
      {/* links */}

      <ul className=" hidden lg:flex items-center text-white gap-8  tracking-wider capitalize mr-4">
        {links.map((link, key) => {
          return (
            <li key={key} className="hover:text-opacity-60 ">
              {link.sub ? (
                <SubNav ref={detailRef} text={link.text} className=" relative ">
                  <SubNavLinkList
                    className=" absolute top-full  pt-8
                    bg-twine-800 text-white rounded-md 
                    w-60"
                    links={link.sub}
                  />
                </SubNav>
              ) : (
                <NavLink className=" " href={link.href}>
                  {link.text}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex justify-self-end items-center gap-4">
        <Link href="/dashboard">
          <BsFillPersonFill className="border-2 border-twine-500 text-4xl rounded-full text-white bg-twine-500 p-1" />
        </Link>
        <button
          color="twine-500"
          className="text-white font-medium  px-4 py-1 rounded-sm capitalize border-2 hover:bg-white hover:text-black border-white tracking-wider transition">
          log in{" "}
        </button>
      </div>
      <button
        className=" lg:hidden justify-self-end"
        onClick={() => {
          showNav(true);
        }}>
        <RiMenuFoldLine className="text-3xl" />
      </button>
    </nav>
  );
};

export default DesktopNav;
