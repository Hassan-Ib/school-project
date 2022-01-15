import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, icon, handleNavToggle, className, children }) => {
  const { asPath: path } = useRouter();
  return (
    <>
      <NextLink href={href}>
        <a
          onClick={handleNavToggle}
          className={`navlink relative z-10 flex items-center capitalize font-medium tracking-widest opacity-70 ${className} group
          ${path === href ? "opacity-100" : ""} `}>
          {icon && <span>{icon}</span>}
          {children}
          <span className="absolute w-full h-[1px] bg-white left-0 -bottom-1 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
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
