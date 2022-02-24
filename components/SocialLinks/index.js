import React from "react";
import { socialLink } from "./links";
import { Link } from "../Link";
import PropType from "prop-types";
const SocialLinks = ({ color, className, size }) => {
  return (
    <ul className={`text-${color} flex gap-4 ${className}`}>
      {socialLink.map((link, index) => (
        <li
          key={index}
          className={`border border-${color} p-3 rounded-full cursor-pointer`}>
          <Link href={link.href} className={`text-${size}`}>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SocialLinks.defaultProps = {
  color: "white",
  size: "base",
};

SocialLinks.PropType = {
  color: PropType.string,
  className: PropType.string,
  size: PropType.oneOf(["base", "xl", "2xl"]),
};

export default SocialLinks;
