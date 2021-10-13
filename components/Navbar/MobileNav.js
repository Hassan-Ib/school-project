import React from "react";
import { NavLink, Link } from "../Link";
import logo from "./../../public/Faculty-Logo.png";
import Image from "next/image";
import { VscChromeClose } from "react-icons/vsc";
import PropType from "prop-types";
import { SubNavLinkList, SubNav } from "./NavComponents";
import { links } from "./navData";
import SocialLinks from "../SocialLinks";
// mobile navigation

const MobileNav = ({ closeNav, isNavToggled }) => {
  return (
    <nav
      // ref={navSectionRef}
      className={`
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

      <div className="overflow-auto max-w-xs h-full w-3/4 bg-birch-500 relative z-20">
        <section className="flex items-center transform -translate-y-8">
          {/* logo */}

          <Image
            src={logo}
            alt="Faculty of computing and Informatics"
            width={200}
            height={200}
          />

          {/* burger */}

          <button onClick={closeNav} className="times">
            <VscChromeClose className="text-2xl opacity-90" />
          </button>
        </section>

        {/* navigation links */}

        <ul className="divide-y divide-white divide-opacity-50 text-white px-8 font-bold tracking-wider capitalize">
          {links.map((link, key) => {
            if (link.sub) {
              return (
                <li key={key}>
                  <SubNav text={link.text} className="py-4">
                    <SubNavLinkList links={link.sub} />
                  </SubNav>
                </li>
              );
            }
            return (
              <li key={key}>
                <NavLink href={link.href}>{link.text}</NavLink>
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
