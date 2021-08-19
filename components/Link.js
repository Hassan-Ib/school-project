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
            <span className=" absolute left-1/2 transform -translate-x-1/2 -bottom-2 inline-block md:triangle "></span>
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
