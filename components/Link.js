import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

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

export { Link };
