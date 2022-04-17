import React from "react";
import { Link } from "./Link";
import { useSession } from "next-auth/react";

const Avatar = () => {
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
          welcome, <br /> {session?.user?.name.split(" ")[0]}
        </span>
      </Link>
    );
  }

  return null;
};

export default Avatar;
