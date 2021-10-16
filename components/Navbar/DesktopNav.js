import React from "react";
import Image from "next/image";
import logo from "./../../public/Faculty-Logo.png";
import { NavLink, Button, Link } from "../Link";
import { RiMenuFoldLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { SubNavLinkList, SubNav } from "./NavComponents";
import { links } from "./navData";
import PropType from "prop-types";

const DesktopNav = ({ showNav }) => {
  return (
    <nav
      className="
        absolute z-10 
        w-full  h-24
        left-0 
        flex items-center justify-between 
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

      <ul className=" hidden md:flex items-center text-lg text-white gap-8 font-medium tracking-wider capitalize">
        {links.map((link, key) => {
          if (link.sub) {
            return (
              <li key={key}>
                <SubNav text={link.text}>
                  <SubNavLinkList
                    className="text-base absolute left-0 -bottom-32
                    bg-twine-800 text-white rounded-sm 
                    w-60"
                    links={link.sub}
                  />
                </SubNav>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <NavLink href={link.href}>{link.text}</NavLink>
              </li>
            );
          }
        })}
      </ul>
      <div className="flex items-center gap-4 ">
        <Link href="/dashboard">
          <BsFillPersonFill className="border-2 border-twine-500 text-4xl rounded-full text-white bg-twine-500 p-1" />
        </Link>
        <Button
          color="twine-500"
          className="text-white font-medium border-white bg-twine-500 tracking-wider">
          log in{" "}
        </Button>
      </div>
      <button
        className=" md:hidden"
        onClick={() => {
          showNav(true);
        }}>
        <RiMenuFoldLine className="text-white text-3xl" />
      </button>
    </nav>
  );
};

DesktopNav.PropType = {
  showNav: PropType.func,
};

export default DesktopNav;
