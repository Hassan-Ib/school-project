import React from "react";
import Navbar from "./Navbar";
import { Link } from "../components/Link";
import Image from "next/image";
import HeroImage from "../public/hero-bg.jpg";

const Header = () => {
  return (
    <header className="relative mb-4 h-hero ">
      {/* <div className="absolute bg-blend-overlay h-8 w-full -top-3  z-10 bg-gradient-to-b from-birch-500 to-transparent"></div> */}
      {/* bg image */}
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-birch-500 bg-opacity-80"></div>
      <div className="absolute left-0 top-0 -z-10 w-full h-full">
        <Image
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          alt="hero bannner image"
        />
      </div>

      <section className="relative z-10 text-white text-center h-full md:w-2/3 md:m-auto grid gap-3 place-content-center place-items-center">
        <h1 className="text-3xl font-medium tracking-wider md:text-5xl ">
          Faculty of Computing and Infomatics
        </h1>
        <p className="m-auto w-3/4  md:text-lg md:font-light tracking-wider">
          Create a home filled with music with Connected Speakers. Compatible
          with all setups, ready to play and tuned to your movement from room to
          room.
        </p>
        <div className=" tracking-wider pt-2 text-lg">
          <Link
            href="#"
            className=" px-6 py-2 rounded capitalize bg-twine-500 hover:bg-twine-100 hover:text-birch-500 transition-all">
            learn more
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
