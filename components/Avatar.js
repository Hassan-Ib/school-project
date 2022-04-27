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
  console.log(session.user);
  const { first, last } = name;

  const firstName = first.split("")[0];
  const lastName = last.split("")[0];
  return (
    <Link href="/profile" className="flex items-center justify-center gap-2">
      {/* <div className="relative rounded-full  w-8 h-8 font-bold">
        <Image
          src={"/person-user.png"}
          alt={`${first} ${last} image`}
          layout="fill"
        />
      </div> */}
      <div className="relative rounded-full  w-10 h-10 font-bold flex justify-center items-center border border-birch-500 uppercase">
        {firstName}
        {lastName}
      </div>
      <span className="text-xs capitalize">
        hi, {first}
        <br />
        welcome back
      </span>
    </Link>
  );
};

export default Avatar;
