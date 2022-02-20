import React from "react";
import { NavLink } from "../Link";
import Avatar from "../Avatar";
import { VscChromeClose } from "react-icons/vsc";
import PropType from "prop-types";
import { links } from "./navData";
import SocialLinks from "../SocialLinks";
import { SignButton, CreateArticleButton } from "../Buttons";

const MobileNav = ({ closeNav, isNavToggled }) => {
  return (
    <nav
      className={`lg:hidden fixed z-50 h-screen w-full top-0 left-0 overflow-hidden text-white transition duration-75 ease-out
       transform ${!isNavToggled ? "-translate-x-full" : ""}
        `}>
      {/* overlay  */}
      <div
        onClick={closeNav}
        className=" cursor-pointer absolute top-0 left-0 h-screen w-full bg-birch-500 bg-opacity-70"></div>
      {/* overlay ends */}

      <div className="overflow-auto flex flex-col max-w-xs h-full sm:w-3/4 bg-birch-500 relative z-20 px-6 pb-8">
        <section className="flex items-center justify-between  pt-10  ">
          {/* logo */}
          <Avatar size="lg" />
          <button
            onClick={closeNav}
            className="flex border-2 border-twine-400 rounded-full p-1 ">
            <VscChromeClose className="text-2xl opacity-90" />
          </button>
        </section>

        {/* navigation links */}

        <ul className="text-white pt-12 tracking-widest capitalize">
          {links.map((link, key) => {
            return (
              <li key={key} onClick={closeNav}>
                <NavLink
                  href={link.href}
                  className="p-3 hover:bg-twine-900 hover:bg-opacity-70 mb-1">
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex-1 pt-12">
          <div className="flex items-center gap-4 px-1">
            <SignButton />
            <CreateArticleButton className="text-white btn btn-sm hover:bg-white hover:text-black border-white tracking-wider ">
              create article
            </CreateArticleButton>
          </div>
        </div>

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
