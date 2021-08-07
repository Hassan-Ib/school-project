import { Link } from "../components/Link";

const Hero = () => {
  return (
    <header className="relative h-96 w-full text-gray-900 grid px-8 lg:px-16">
      <section className="md:w-3/4 lg:w-2/4 self-center grid gap-4">
        <h4 className="text-xl opacity-80 font-medium">
          <span className="text-red-500 ">Educate!</span> smart is greate
        </h4>
        <h1 className="text-3xl font-bold md:text-4xl tracking-wide">
          Faculty of Computer science and infomatics
        </h1>
        <p className="opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi
          officiis hic porro. Deleniti accusamus fugit
        </p>
        <div className=" text-white flex w-2/4 sm:w-1/4 min-w-max gap-6 justify-between font-medium">
          <Link href="#" className="cta bg-red-600">
            learn more
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Hero;
