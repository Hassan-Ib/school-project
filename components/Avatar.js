import React from "react";
import { Link } from "./Link";
import { BsFillPersonFill } from "react-icons/bs";
import PropType from "prop-types";
import { useSession } from "next-auth/react";
const sizeToTailwind = {
  sm: "xl",
  md: "4xl",
  lg: "5xl",
};

const Avatar = ({ size }) => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" ? true : false;

  return isAuthenticated ? (
    <Link href="/dashboard" className="flex items-center gap-1">
      <BsFillPersonFill
        className={`border-2 border-twine-500 text-${sizeToTailwind[size]}   text-white bg-twine-500 p-1`}
      />
      <span className="text-xs">
        welcome, <br /> {session?.user?.name}
      </span>
    </Link>
  ) : null;
};

Avatar.defaultProps = {
  size: "sm",
};
Avatar.PropType = {
  size: PropType.oneOf(["sm", "md", "lg"]),
};
export default Avatar;
