import React from "react";
import { default as NextLink } from "next/link";
import { useRouter } from "next/dist/client/router";

const NavLink = ({ link, text, handleNavToggle, className }) => {
  const { asPath } = useRouter();
  return (
    <>
      <NextLink href={link}>
        <a
          onClick={handleNavToggle}
          className={`capitalize relative ${className}`}>
          {text}
          {asPath === link ? (
            <span className=" absolute left-0 -bottom-2 inline-block h-2 bg-white rounded-sm"></span>
          ) : (
            ""
          )}
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
