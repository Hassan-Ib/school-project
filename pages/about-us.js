import React from "react";
import { getLayoutWithNavAndFooter, Link } from "../components";
import Image from "next/image";
import Svg from "../public/undraw_exams_g-4-ow.svg";
import { AiOutlineDownload } from "react-icons/ai";

function ImportantFigure(props) {
  return (
    <article className="rounded-md bg-white shadow-md  p-2 sm:p-4 w-[90%] max-w-sm md:max-w-2xl">
      <figure className="relative w-full h-96 group flex flex-row gap-4">
        <div className="relative w-full h-full">
          <Image
            className={
              "group-hover:transform group-hover:scale-110 transition-transform duration-300"
            }
            alt="cto"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            src={`/about/${props.url}`}
          />
        </div>
        <figcaption className="absolute bg-black/40 md:bg-inherit text-white md:text-black z-10 bottom-0 left-0 md:static px-2 py-6">
          <h3 className="mb-2 font-medium text-birch/90 max-w-min uppercase tracking-widest">
            Dr. Ibrahim Hassanayomide
          </h3>
          <p className="  opacity-80 md:py-6">
            lorem ipsum dolor sit amet consectetur adipisicing elit. laboriosam,
            laboriosam justify
          </p>
          <div className="flex justify-end"></div>
        </figcaption>
      </figure>
    </article>
  );
}

const About = () => {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row lg:h-[80vh] gap-14 place-items-center px-6 pt-16 pb-10 mb-20">
        <div className="flex flex-col gap-10 items-center justify-center md:items-start max-w-xl ">
          <h2 className="text-4xl sm:text-5xl leading[1.1] sm:leading-[1.2] text-center lg:text-left font-bold">
            Complete your dream in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              computing
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              security
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              prgramming
            </span>
            .
          </h2>
          <p className=" leading-5 md:leading-6 opacity-80 text-center lg:text-left">
            Learn any programing language, and build your own future, you can
            learn from us onsite or online with us. we are open to application
            anytime, and if you want a project done we have certified, capable
            student to get it done, click on contact below
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start text-center gap-4 self-stretch">
            <button className="btn btn-md btn-block flex justify-center gap-3 items-center">
              <AiOutlineDownload className="hidden sm:block text-xl" /> Download
              our guide
            </button>
            <Link href="/contacts" className="btn btn-md btn-outline-black">
              {" "}
              Contact us{" "}
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={Svg} alt="student sitting for exam svg" />
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
          <ImportantFigure
            title={"VC"}
            url={"jurica-koletic-7YVZYZeITc8-unsplash.jpg"}
          />
          <ImportantFigure
            title={"Hod"}
            url={"linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"}
          />
          <ImportantFigure
            title={"Hod"}
            url={"olga-zabegina-A3MleA0jtoE-unsplash.jpg"}
          />
        </div>
      </section>
      <section className=" px-4 md:px-10 my-10">
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
