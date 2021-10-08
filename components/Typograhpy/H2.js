import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2 className={className + " text-xl font-bold mb-2 md:text-2xl"}>
      {children}
    </h2>
  );
};

export default H2;
