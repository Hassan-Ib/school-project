import React from "react";
import PropTypes from "prop-types";
function Container({ children }) {
  return <section className="xl:container relative m-auto">{children}</section>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
