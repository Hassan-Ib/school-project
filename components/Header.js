import React from "react";
import Navbar from "./Navbar";
import { Link } from "../components/Link";

const Header = () => {
  return (
    <header
      className="bg-hero-banner
       bg-cover
       bg-center
       bg-no-repeat
       ">
      <Navbar />
      <section
        className="
      relative
       pt-52
      pb-28 
      lg:px-12 
      text-gray-900
       mb-4 
      ">
        <div className="absolute top-0 left-0 h-full w-full bg-birch-500 bg-opacity-70"></div>
        <section
          className="
        relative 
        z-10
        w-full
        text-white 
        text-center 
        grid
         gap-4
      ">
          {/* <h4 className="text-xl lg:text-2xl opacity-80 font-medium">
            <span className="text-red-500 ">Educate!</span> smart is great
          </h4> */}
          <h1 className="text-3xl  font-bold tracking-wide">
            Faculty of Computing and Infomatics
          </h1>
          <p className="  m-auto w-3/4  ">
            Create a home filled with music with Connected Speakers. Compatible
            with all setups, ready to play and tuned to your movement from room
            to room.
          </p>
          <div className=" tracking-wide pt-2">
            <Link href="#" className="border-2 px-6 py-2 rounded capitalize">
              learn more
            </Link>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
