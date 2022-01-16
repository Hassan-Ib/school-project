import React from "react";
import { getLayoutWithNavAndFooter } from "../components";
import Image from "next/image";
import Svg from "../public/undraw_exams_g-4-ow.svg";

const ImportantFigure = ({ title }) => {
  return (
    <div className="relative z-10 h-96 w-[80%] md:w-[60%] lg:w-full overflow-hidden rounded-md border-2 group ">
      <Image
        className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
        src={"/img/leon-wu-LLfRMRT-9AY-unsplash.jpg"}
        alt="cto"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <span className="absolute z-20 w-full text-center bottom-10 left-0 tracking-widest uppercase text-3xl font-semibold text-white bg-slate-800 bg-opacity-50">
        {title}
        cto
      </span>
    </div>
  );
};
const About = () => {
  return (
    <main className="text-twine-900">
      <section className="grid md:h-[80vh] place-items-center md:grid-cols-2 px-10 mb-10 md:px-0 bg-twine-100 ">
        <div>
          <h2 className="text-xl text-twine-800 md:text-2xl font-semibold tracking-wide py-20 px-12 md:py-0">
            Our board of directors are dedicated to expanding our positive
            impact.
          </h2>
        </div>
        <div className="block">
          <Image src={Svg} alt="student sitting for exam svg" />
        </div>
      </section>
      <section className="px-10 my-14">
        <div>
          <h2 className="text-lg md:text-xl font-semibold tracking-wide">
            We believe that tech can play an significant role in alleviating
            social, political, and economic problems.
          </h2>
          <p className="text py-2">
            We also believe that by empowering the brightest, most responsible
            students through mentorship, they can become the innovators and
            leaders that their communities need.
          </p>
        </div>
        {/* gallary for the importants */}
        <div className=" grid place-items-center gap-6 lg:grid-cols-3 py-16">
          <ImportantFigure />
          <ImportantFigure />
          <ImportantFigure />
        </div>
      </section>
      <section className="my-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium max-w-xl mb-10">
            Cooperation unifies the best teammates & create miracles.
          </h1>
          <button className="relative capitalize font-semibold tracking-wider border-2 border-twine-700 px-4 py-2 overflow-hidden group">
            <span className="relative z-20 group-hover:text-white transition-color duration-300">
              meet out staffs
            </span>
            <span className="absolute w-full h-full top-[90%] left-0 bg-twine-700 group-hover:top-0 transition-all duration-300"></span>
          </button>
        </div>
        <div className="flex  overflow-x-scroll  mx-auto snap-x snap-proximity gap-4 my-20">
          <div className="relative flex-shrink-0 basis-[600px]  whitespace-nowrap h-96  snap-center">
            <Image
              src={"/img/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"}
              alt="staff"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative flex-shrink-0 basis-[600px]  whitespace-nowrap h-96 snap-center">
            <Image
              src={"/img/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"}
              alt="staff"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>{" "}
          <div className="relative flex-shrink-0 basis-[600px]  whitespace-nowrap h-96 snap-center">
            <Image
              src={"/img/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"}
              alt="staff"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>{" "}
          <div className="relative flex-shrink-0 basis-[600px]  whitespace-nowrap h-96 snap-center">
            <Image
              src={"/img/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"}
              alt="staff"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

About.getLayout = getLayoutWithNavAndFooter;

export default About;
