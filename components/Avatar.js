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
  if (isAuthenticated) {
    const [firstName, lastName] = session?.user?.name
      .split(" ")
      .map((el) => el.split("")[0].toUpperCase());
    console.log(firstName, lastName);

    return (
      <Link
        href="/dashboard"
        className="flex items-center justify-center gap-2">
        <div className="rounded-full bg-twine-500 px-2 p-1 font-bold">
          {firstName}
          {lastName}
        </div>
        <span className="text-xs">
          welcome, <br /> {session?.user?.name}
        </span>
      </Link>
    );
  }

  return null;
};

Avatar.defaultProps = {
  size: "sm",
};
Avatar.PropType = {
  size: PropType.oneOf(["sm", "md", "lg"]),
};
export default Avatar;
