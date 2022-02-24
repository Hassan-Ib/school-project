import React from "react";
import Image from "next/image";
import logo from "./../../public/img/LAUTECH-Logo.png";
import { NavLink } from "../Link";
import { RiMenuFoldLine } from "react-icons/ri";
import Avatar from "../Avatar";
import { links } from "./navData";
import { SignButton, CreateArticleButton } from "../Buttons";
const DesktopNav = ({ showNav }) => {
  return (
    <nav
      className="relative z-40 w-full h-20 left-0 flex items-center mt-2 p-4 gap-3 bg-birch-500 text-birch-50
    ">
      {/* logo */}
      <div className="flex items-center gap-2">
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
        <span className="text-xl font-semibold tracking-widest">FCI</span>
      </div>
      <div className="flex-1"></div>
      {/* links */}

      <ul className=" hidden lg:flex items-center text-white gap-6 ">
        {links.map((link, key) => {
          return (
            <li
              key={key}
              className="relative group hover:bg-birch-700 py-1 px-2">
              <NavLink className=" " href={link.href}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex justify-self-end items-center gap-4">
        <SignButton />
        <Avatar size="md" />
        <CreateArticleButton className="btn btn-sm text-white border-white hover:bg-white hover:text-black tracking-wider ">
          create article
        </CreateArticleButton>
      </div>
      <button
        className="flex items-center font-medium px-4 py-1 rounded-sm capitalize border-2 border-white hover:bg-white hover:text-black tracking-wider transition gap-2 lg:hidden justify-self-end"
        onClick={() => {
          showNav(true);
        }}>
        <span>menu</span> <RiMenuFoldLine className="text-2xl" />
      </button>
    </nav>
  );
};

export default DesktopNav;
