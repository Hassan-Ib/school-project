import React from "react";
import { default as NavLink } from "next/link";
import { useRouter } from "next/dist/client/router";
const Link = ({ link, text, classNames }) => {
  const routerDetails = useRouter();
  console.log({ routerDetails });
  return (
    <NavLink href={link}>
      <a className={`capitalize ${classNames}`}>{text}</a>
    </NavLink>
  );
};

export default Link;
