import React from "react";
import PropType from "prop-types";
function Container({ children, className }) {
  return (
    <div className={"lg:container relative m-auto sm:px-2 " + className}>
      {children}
    </div>
  );
}
export const Section = ({ className, children }) => {
  return (
    <section className={className + " " + "px-6 mb-20"}>{children}</section>
  );
};

Container.defaultProps = {
  className: " ",
};
Container.PropType = {
  children: PropType.element.isRequired,
  className: PropType.string,
};

export default Container;
