import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={
        className +
        " " +
        "font-medium mb-3 text-sm leading-relaxed md:text-base  md:opacity-80"
      }>
      {children}
    </p>
  );
};

export default Paragraph;
