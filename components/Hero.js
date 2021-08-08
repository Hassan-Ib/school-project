import { Link } from "../components/Link";

const Hero = () => {
  return (
    <header
      className="relative 
      h-xl lg:h-screen px-8 lg:px-12
    text-gray-900 
      grid 
      lg:grid-cols-2 
       place-content-center
      ">
      <section className=" grid gap-3 ">
        <h4 className="text-xl md:text-2xl opacity-80 font-medium">
          <span className="text-red-500 ">Educate!</span> smart is great
        </h4>
        <h1 className="text-3xl font-bold md:text-6xl tracking-wide">
          Faculty of Computer science and infomatics
        </h1>
        <p className="opacity-70 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi
          officiis hic porro. Deleniti accusamus fugit
        </p>
        <div className="text-white w-2/4 sm:w-1/4 min-w-max font-medium">
          <Link href="#" className="cta bg-red-600 md:text-xl">
            learn more
          </Link>
        </div>
      </section>
      <section className=" invisible lg:visible lg:h-full lg:w-full bg-hero-banner bg-cover bg-center bg-no-repeat border-2 border-red-500"></section>
    </header>
  );
};

export default Hero;
