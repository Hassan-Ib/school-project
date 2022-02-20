import React from "react";
import Image from "next/image";
import spinner from "../public/svg/spinner.gif";
import PropTypes from "prop-types";

const Loader = ({ size }) => {
  const sizeDefinition = {
    sm: 50,
    md: 75,
    lg: 100,
  };

  return (
    <div className="">
      <Image src={spinner} alt="loader spinner" width={sizeDefinition[size]} />
    </div>
  );
};

Loader.defaultProps = {
  size: "md",
};

Loader.propTypes = {
  size: PropTypes.oneOf(["sm", "mid", "lg"]),
};

export default Loader;
