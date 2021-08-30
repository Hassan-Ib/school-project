import React from "react";
import { default as NextLink } from "next/link";
import { useRouter } from "next/dist/client/router";

const NavLink = ({ link, text, icon, handleNavToggle, className }) => {
  const { asPath } = useRouter();
  return (
    <>
      <NextLink href={link}>
        <a
          onClick={handleNavToggle}
          className={`relative flex items-center capitalize ${className}`}>
          <span>{icon}</span>
          {text}
        </a>
      </NextLink>
    </>
  );
};

const Link = ({ href, children, className }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export { NavLink, Link };
