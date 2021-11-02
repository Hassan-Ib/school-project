import React, { forwardRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "../Link";
import PropTypes from "prop-types";

const SubNav = forwardRef(({ children, className, text }, ref) => {
  return (
    <details
      ref={ref}
      className={`${className} outline-none cursor-pointer relative group`}>
      <summary className="flex items-center gap-2">
        {text}
        <IoIosArrowDown className="opacity-70 group-hover:opacity-100 text-xl" />
      </summary>
      {children}
    </details>
  );
});

SubNav.displayName = SubNav;

SubNav.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const SubNavLinkList = ({ className, links }) => {
  // console.log(links);
  return (
    <ul
      className={
        className +
        " text-sm divide-y divide-white divide-opacity-50 px-6 py-4 opacity-90"
      }>
      {links.map((link, key) => (
        <li key={key}>
          <NavLink href={link.href} className="py-2">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

SubNavLinkList.propTypes = {
  links: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export { SubNav, SubNavLinkList };
