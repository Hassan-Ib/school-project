import React from "react";
import { Link } from "../components/Link";
import Image from "next/image";
import HeroImage from "../public/hero-bg.jpg";

const Header = () => {
  return (
    <header className="relative lg:h-hero px-4">
      <div className="flex flex-col gap-10 lg:flex-row h-full pt-10 justify-evenly items-center">
        <section className="text-center lg:text-left text-black  max-w-md">
          <h1 className="font-bold text-4xl leading[1.1]  lg:text-6xl lg:leading-[1.2] mb-2 md:mb-6 ">
            Faculty of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Computing
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Infomatics
            </span>
          </h1>
          <p className="mb-8 opacity-90 leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. lorem
          </p>
          <div className="text-lg md:text-xl font-medium  ">
            <Link
              href="/about-us"
              className="btn btn-md text-base md:text-lg border-birch-500 rounded bg-birch-500 text-white hover:bg-birch-500/90"
            >
              Descover more
            </Link>
          </div>
        </section>
        <div className="relative w-full lg:w-[400px] h-[400px] lg:rounded-tl-[200px] lg:rounded-br-[200px] overflow-hidden">
          <Image
            src={HeroImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt="hero bannner image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
