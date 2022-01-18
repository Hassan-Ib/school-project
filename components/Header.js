import React from "react";
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

      <section className="relative z-10 text-white text-center h-full md:w-2/3 md:m-auto grid  place-content-center place-items-center">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl mb-2 md:mb-4">
          Faculty of Computing and Infomatics
        </h1>
        <p className="m-auto w-3/4 text-lg md:text-2xl mb-6 md:mb-9 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="text-lg md:text-xl font-medium ">
          <Link
            href="/about-us"
            className="px-6 py-2 border-2 border-twine-100  capitalize hover:bg-twine-100 hover:text-gray-800 flex hover:gap-1 items-end transition-all duration-300">
            Descover more
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
