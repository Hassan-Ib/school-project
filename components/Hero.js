import { Link } from "../components/Link";
import Image from "next/image";
// import bannerImage from "../public/img/";
const Hero = () => {
  return (
    <header
      className="relative 
      h-xl md:h-xxl lg:h-xxxl px-6 lg:px-12 
    text-gray-900 
      grid
      md:grid-cols-2
      ">
      <section
        className=" grid gap-3 self-center
      ">
        <h4 className="text-xl lg:text-2xl opacity-80 font-medium">
          <span className="text-red-500 ">Educate!</span> smart is great
        </h4>
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl tracking-wide">
          Faculty of Computer science and infomatics
        </h1>
        <p className="opacity-70 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi
          officiis hic porro. Deleniti accusamus fugit
        </p>
        <div className="w-2/4 sm:w-1/4 min-w-max font-medium">
          <Link
            href="#"
            className="inline-block capitalize border-2 rounded-md py-2 px-4 transform hover:border-primary-900 focus:-translate-y-0.5 lg:text-lg">
            learn more
          </Link>
        </div>
      </section>
      {/* <section className=" hidden md:block invisible md:visible md:h-full lg:w-full bg-hero-banner bg-cover bg-center"></section> */}
    </header>
  );
};

export default Hero;
