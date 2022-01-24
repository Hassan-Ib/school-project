import React from "react";
import Image from "next/image";
import logo from "./../../public/img/LAUTECH-Logo.png";
import { NavLink } from "../Link";
import { RiMenuFoldLine } from "react-icons/ri";
import Avatar from "../Avatar";
import { links } from "./navData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SignButton } from "../Buttons";

const DesktopNav = ({ showNav }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log("session nav", session);

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

      <ul className=" hidden lg:flex items-center text-white gap-8 mr-4">
        {links.map((link, key) => {
          return (
            <li key={key} className="relative group">
              <NavLink className=" " href={link.href}>
                {link.text}
              </NavLink>
              <span className="absolute w-full h-[2px] bg-white left-0 -bottom-1 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex justify-self-end items-center gap-4">
        <SignButton />
        <Avatar size="md" />

        <button
          onClick={() =>
            // signIn()
            router.push("/articles/create")
          }
          color="twine-500"
          className="text-white font-medium  px-4 py-1 rounded-sm capitalize border-2 hover:bg-white hover:text-black border-white tracking-wider transition">
          create article
        </button>
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
