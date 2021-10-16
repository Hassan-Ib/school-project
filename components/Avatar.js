import React from "react";
import { Link } from "./Link";
import { BsFillPersonFill } from "react-icons/bs";
import PropType from "prop-types";

const Avatar = ({ size }) => {
  const sizeToTailwind = {
    sm: "xl",
    md: "4xl",
    lg: "5xl",
  };
  return (
    <Link href="/dashboard">
      <BsFillPersonFill
        className={`border-2 border-twine-500 text-${sizeToTailwind[size]} rounded-full text-white bg-twine-500 p-1`}
      />
    </Link>
  );
};

Avatar.defaultProps = {
  size: "sm",
};
Avatar.PropType = {
  size: PropType.oneOf(["sm", "md", "lg"]),
};
export default Avatar;
