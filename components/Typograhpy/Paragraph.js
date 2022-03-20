import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={
        " font-normal tracking-wide mb-3 text-sm leading-relaxed md:text-base  md:opacity-80 " +
        className
      }>
      {children}
    </p>
  );
};

export default Paragraph;
