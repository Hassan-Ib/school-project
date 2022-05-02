import React from "react";
import { getLayoutWithNavAndFooter, Link } from "../components";
import Image from "next/image";
import Svg from "../public/undraw_exams_g-4-ow.svg";
import {AiOutlineDownload} from "react-icons/ai"

const ImportantFigure = ({ title, name }) => {
  return (
    <article className="relative w-[80%] flex flex-col gap-4 max-w-sm md:max-w-2xl md:flex-row rounded-md bg-white shadow-md p-4">
      <figure className="relative md:w-[60%] block group overflow-hidden rounded">
        <Image
          className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
          src={"/img/leon-wu-LLfRMRT-9AY-unsplash.jpg"}
          alt="cto"
          width="500"
          height="400"
        />
        <figcaption className="absolute bottom-4 left-0 ">
          <h3 className="text-xl font-medium text-white bg-gradient-to-r from-birch-500 via-birch-500 to-twine-300 max-w-min">      
            Ibrahim
            Hassanayomide
          </h3>
        </figcaption>
      </figure>
      <section className="tracking-widest  bg-slate-800">
        {title}
      </section>
    </article>
  );
};

const About = () => {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row gap-14 place-items-center px-6 py-10 pb-10 mb-20">
        <div  className="flex flex-col gap-10 items-center justify-center md:items-start max-w-2xl ">
          <h2 className="text-4xl text-center lg:text-left font-bold">
            Complete your dream in computing, security and prgramming.
          </h2>
          <p className="leading-5 md:leading-6 opacity-80 text-center lg:text-left">
            Learn any programing language, and build your own future,
            you can learn from us onsite or online with us.
            we are open to application anytime, and if you want a project done we have certified, capable student to get it done, click on contact below
          </p>
          <div className="flex flex-col text-center gap-4 self-stretch border-2 border-red-500">

            <button className="btn btn-md btn-block flex justify-center gap-3 items-center">
              <AiOutlineDownload className="text-xl"/> Download our guide 
            </button>
            <Link href="/contacts" className="btn btn-md btn-outline-black" > Contact us </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={Svg}  alt="student sitting for exam svg" />
        </div>
      </section>
      <section className="md:px-10 py-10 my-20 ">
        <div className="text-center ">
          <p className="text-xs tracking-widest py-2 uppercase">
            start learning coding today
          </p>
          <h2 className="text-2xl capitalize md:text-3xl font-bold tracking-wide">
            Build your dream <span className="font-light"> TODAY</span>
          </h2>
        </div>
        {/* gallary for the importants */}
        <div className="flex flex-col gap-16 items-center py-16">
          <ImportantFigure title={"VC"} />
          <ImportantFigure title={"Hod"} />
          <ImportantFigure title={"Hod"} />
        </div>
      </section>
      <section className="md:px-10 my-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium max-w-xl mb-10">
            Cooperation unifies the best teammates & create miracles.
          </h1>
          <button className="btn btn-sm btn-bg-flow">
            <span className="text">meet out staffs</span>
            <span className="flow flow-t"></span>
          </button>
        </div>
        <div className="flex overflow-x-scroll mx-auto md:w-[70%] lg:w-[60%] snap-x snap-proximity gap-4 my-20">
          <div className="relative basis-full flex-shrink-0 snap-center">
            {/* image */}
            <div className="relative  w-full  whitespace-nowrap h-96  ">
              <Image
                src={"/img/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"}
                alt="staff"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            {/* card */}
            <div className="absolute w-full h-full top-0 left-0 bg-twine-700 bg-opacity-40 ">
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

About.getLayout = getLayoutWithNavAndFooter;

export default About;
