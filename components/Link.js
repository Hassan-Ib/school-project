import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, handleNavToggle, className, children }) => {
  const { asPath: path } = useRouter();
  return (
    <>
      <NextLink href={href} passHref>
        <a
          onClick={handleNavToggle}
          className={`navlink relative z-10 flex items-center capitalize font-medium tracking-widest opacity-100 ${className} group
          ${path === href ? "border-b-2 border-twine-600 " : ""} `}>
          {children}
        </a>
      </NextLink>
    </>
  );
};

NavLink.defaultProps = {
  className: "",
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  handleNavToggle: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.string.isRequired,
};

const Link = ({ href, children, className }) => {
  return (
    <NextLink href={href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

Link.defaultProps = {
  className: "",
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { NavLink, Link };
