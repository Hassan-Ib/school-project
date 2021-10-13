import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "../Link";
import PropType from "prop-types";

export const SubNav = ({ children, className, text }) => {
  return (
    <details
      className={`${className} outline-none cursor-pointer relative group`}>
      <summary className="flex items-center gap-2">
        {text}
        <IoIosArrowDown className="opacity-70 group-hover:opacity-100 text-xl" />
      </summary>
      {children}
    </details>
  );
};

SubNav.PropType = {
  text: PropType.string,
  children: PropType.element,
  className: PropType.string,
};

export const SubNavLinkList = ({ className, links }) => {
  console.log(links);
  return (
    <ul
      className={
        className +
        " text-sm divide-y divide-white divide-opacity-50 px-6 opacity-90"
      }>
      {links.map((link, key) => (
        <li key={key}>
          <NavLink href={link.href}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

SubNavLinkList.PropType = {
  links: PropType.array.isRequired,
  className: PropType.string,
};
