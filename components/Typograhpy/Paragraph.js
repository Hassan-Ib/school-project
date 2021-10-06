import React from "react";

const Paragraph = ({ children, className }) => {
  return (
    <p className={className + " " + "font-medium mb-3 text-sm leading-relaxed"}>
      {children}
    </p>
  );
};

export default Paragraph;
