import React from "react";

const H2 = ({ children, className }) => {
  return (
    <h2 className={" text-xl font-bold mb-2 md:text-2xl " + className}>
      {children}
    </h2>
  );
};

export default H2;
