import { Link } from "../components/Link";
import Image from "next/image";
// import bannerImage from "../public/img/";
const Hero = () => {
  return (
    <header
      className="relative 
       h-hero px-6 lg:px-12 
    text-gray-900 
      grid
      ">
      <section className="grid gap-3 self-center">
        <h4 className="text-xl lg:text-2xl opacity-80 font-medium">
          <span className="text-red-500 ">Educate!</span> smart is great
        </h4>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl tracking-wide">
          Faculty of Computer science, Infomatics systems and Cyber security
        </h1>
        <p className="opacity-70 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi
          officiis hic porro. Deleniti accusamus fugit
        </p>
        <div className="w-2/4 sm:w-1/4 min-w-max font-medium">
          <Link href="#" className="">
            learn more
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Hero;
