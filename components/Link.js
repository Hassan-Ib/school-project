import React from "react";
import PropType from "prop-types";
import { default as NextLink } from "next/link";
// import { useRouter } from "next/dist/client/router";

const NavLink = ({ href, icon, handleNavToggle, className, children }) => {
  // const { asPath: path } = useRouter();
  // console.log(path === href);

  return (
    <>
      <NextLink href={href}>
        <a
          onClick={handleNavToggle}
          className={`${className} relative flex items-center capitalize py-4`}>
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
NavLink.PropType = {
  href: PropType.string.isRequired,
  handleNavToggle: PropType.func,
  icon: PropType.element,
  children: PropType.string.isRequired,
};

const Link = ({ href, children, className }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

Link.PropType = {
  href: PropType.string.isRequired,
  children: PropType.element.isRequired,
  className: PropType.string,
};

export const LinkBlue = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <a className={className + " " + "text-blue-800 underline"}>{children}</a>
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

Button.PropType = {
  color: PropType.string,
  children: PropType.element,
  className: PropType.string,
  type: PropType.oneOf(["section", ""]),
};

export { NavLink, Link, Button };
