import React from "react";
import Navbar from "./Navbar";
import { Link } from "../components/Link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="
       relative
       overflow-hidden
       mb-4 
       ">
      {/* bg image */}
      <div className="absolute left-0 top-0 -z-10 w-full h-full">
        <Image
          src="/img/hero-bg.jpg"
          layout="fill"
          objectFit="cover"
          priority
          alt="hero bannner image"
        />
      </div>
      {/* <Navbar /> */}
      <section
        className="relative pt-60 pb-28 lg:px-12 text-gray-900
      ">
        <div className="absolute top-0 left-0 h-full w-full bg-birch-500 bg-opacity-70"></div>
        <section className="relative z-10 w-full text-white text-center grid gap-4">
          <h1 className="text-3xl font-medium tracking-wider md:text-5xl ">
            Faculty of Computing and Infomatics
          </h1>
          <p className="m-auto w-3/4  md:text-lg md:font-light tracking-wider">
            Create a home filled with music with Connected Speakers. Compatible
            with all setups, ready to play and tuned to your movement from room
            to room.
          </p>
          <div className=" tracking-wider pt-2 text-lg">
            <Link
              href="#"
              className=" px-6 py-2 rounded capitalize bg-twine-500 hover:bg-twine-100 hover:text-birch-500 transition-all">
              learn more
            </Link>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
