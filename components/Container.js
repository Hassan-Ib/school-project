import React from "react";
import PropTypes from "prop-types";
function Container({ children, className }) {
  return (
    <div className={className}>
      <div className="xl:container relative m-auto ">{children}</div>
    </div>
  );
}
export const Section = ({ className, children }) => {
  return (
    <section className={className + " " + "px-6 mb-20"}>{children}</section>
  );
};
Section.defaultProps = {
  className: "",
};
Container.defaultProps = {
  className: "",
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Container;
