import React from "react";
import { Link } from "../components/Link";
import Image from "next/image";
import HeroImage from "../public/hero-bg.jpg";

const Header = () => {
  return (
    <header className="relative h-hero px-4">
      <div className="flex h-full pt-10 justify-evenly items-center">
        <section className="text-center md:text-left text-black max-w-xl ">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-2 md:mb-6">
            Faculty of Computing and Infomatics
          </h1>
          <p className=" text-base md:text-2xl mb-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="text-lg md:text-xl font-medium  ">
            <Link
              href="/about-us"
              className="btn btn-md rounded bg-birch-500 text-white hover:bg-birch-500/90">
              Descover more
            </Link>
          </div>
        </section>
        <div className="hidden relative md:block w-[400px] h-[400px] rounded-tl-[200px] rounded-br-[200px] overflow-hidden">
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
