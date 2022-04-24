import React from "react";
import { Link } from "./Link";
import { useSession } from "next-auth/react";
import Image from "next/image";
const Avatar = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" ? true : false;
  // console.log("session : ", session);

  if (!isAuthenticated) return null;

  let { name, matricNo, image } = session?.user;
  // console.log(image, matricNo);

  const { first: firstName, last: lastName } = name;

  return (
    <Link href="/profile" className="flex items-center justify-center gap-2">
      <div className="relative rounded-full bg-twine-500 w-10 h-10 font-bold">
        <Image
          src={"/person-user.png"}
          alt={`${firstName} ${lastName} image`}
          layout="fill"
        />
      </div>
      <span className="text-xs capitalize">
        hi, {firstName}
        <br />
        {lastName}
        <br />
        welcome back
      </span>
    </Link>
  );
};

export default Avatar;
