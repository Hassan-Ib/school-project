import React from "react";
import { NavLink } from "../Link";
import Avatar from "../Avatar";
import { VscChromeClose } from "react-icons/vsc";
import PropType from "prop-types";
import { links } from "./navData";
import SocialLinks from "../SocialLinks";
import { SignButton } from "../Buttons";
import { useRouter } from "next/router";

const MobileNav = ({ closeNav, isNavToggled }) => {
  const router = useRouter();
  return (
    <nav
      className={`
      lg:hidden
      fixed z-50
      h-screen w-full
      top-0 left-0
       overflow-hidden
       text-white
       transition duration-75 ease-out
       transform ${!isNavToggled ? "-translate-x-full" : ""}
        `}>
      {/* overlay  */}
      <div
        onClick={closeNav}
        className=" cursor-pointer absolute top-0 left-0 h-screen w-full bg-birch-500 bg-opacity-70"></div>
      {/* overlay ends */}

      <div className="overflow-auto flex flex-col max-w-xs h-full sm:w-3/4 bg-birch-500 relative z-20 pb-8">
        <section className="flex  pt-10  px-6">
          {/* logo */}

          <div className="flex flex-wrap items-center gap-4">
            <Avatar size="lg" />
            <SignButton />
            <button
              onClick={() => router.push("/articles/create")}
              className="text-white font-medium px-3 py-1 rounded-sm capitalize border-2 hover:bg-white hover:text-black border-white tracking-wider transition">
              create article
            </button>
          </div>

          <button onClick={closeNav} className="flex">
            <VscChromeClose className="text-2xl opacity-90" />
          </button>
        </section>

        {/* navigation links */}

        <ul className="flex-1 text-white px-6 pt-6 font-medium tracking-widest capitalize">
          {links.map((link, key) => {
            return (
              <li key={key}>
                <NavLink
                  href={link.href}
                  className="py-4 hover:bg-twine-900 px-3">
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* social icons */}
        <SocialLinks />
      </div>
    </nav>
  );
};

MobileNav.PropType = {
  closeNav: PropType.func,
  isNavToggled: PropType.bool,
};

export default MobileNav;
