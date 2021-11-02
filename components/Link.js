import React from "react";
import PropTypes from "prop-types";
import { default as NextLink } from "next/link";
import { useRouter } from "next/dist/client/router";

const NavLink = ({ href, icon, handleNavToggle, className, children }) => {
  const { asPath: path } = useRouter();
  // console.log(path === href);

  return (
    <>
      <NextLink href={href}>
        <a
          onClick={handleNavToggle}
          className={`${className} ${
            path === href ? "md:border-b-2 md:border-birch-500" : ""
          } relative flex items-center capitalize`}>
          {icon && <span>{icon}</span>}
          {children}
        </a>
      </NextLink>
    </>
  );
};
NavLink.defaultProps = {
  className: " ",
};
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  handleNavToggle: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.string.isRequired,
};

const Link = ({ href, children, className }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

// Link.defaultProps = {
//   href : "/"
// }

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const LinkBlue = ({ href, children, className }) => {
  return (
    <Link href={href} className={className + " " + "text-blue-800 underline"}>
      {children}
    </Link>
  );
};

const Button = ({ children, className, type, color }) => {
  const sectionBtnStyle =
    type === "section" ? "border-blue-800 text-blue-800 rounded-lg" : " ";
  return (
    <button
      className={`${sectionBtnStyle} ${className} capitalize rounded px-4 py-1 text-sm border-2 border-${color} hover:bg-twine-500 hover:bg-opacity-90 hover:text-white hover:border-twine-500`}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: "black",
  type: "",
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["section", ""]),
};

export { NavLink, Link, Button };
