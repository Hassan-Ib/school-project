import React from "react";
import PropTypes from "prop-types";
import { default as NextLink } from "next/link";
import { useRouter } from "next/dist/client/router";

const NavLink = ({ href, icon, handleNavToggle, className, children }) => {
  const { asPath: path, push } = useRouter();
  // console.log(path === href);
  return (
    <>
      <NextLink href={href}>
        <a
          onClick={handleNavToggle}
          className={`${className} ${
            path === href ? "md:border-b-2 md:border-white" : ""
          } relative flex items-center capitalize hover:opacity-90`}>
          {icon && <span>{icon}</span>}
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
