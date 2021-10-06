import React from "react";
import PropType from "prop-types";
import { default as NextLink } from "next/link";
import { useRouter } from "next/dist/client/router";

const NavLink = ({ link, icon, handleNavToggle, className, children }) => {
  const { asPath } = useRouter();
  return (
    <>
      <NextLink href={link}>
        <a
          onClick={handleNavToggle}
          className={`relative flex items-center capitalize ${className}`}>
          {icon && <span>{icon}</span>}
          {children}
        </a>
      </NextLink>
    </>
  );
};

NavLink.PropType = {
  link: PropType.string.isRequired,
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

const Button = ({ children, className, type }) => {
  const sectionBtnStyle =
    type === "section" ? "border-blue-800 text-blue-800 rounded-lg" : " ";
  return (
    <button
      className={
        sectionBtnStyle +
        " " +
        className +
        " " +
        ` capitalize rounded px-4 py-1 text-sm border-2`
      }>
      {children}
    </button>
  );
};

export { NavLink, Link, Button };
