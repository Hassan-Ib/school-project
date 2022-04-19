import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Banner = () => {
  return (
    <article className=" hidden bg-blue-500 sm:block flex-1 text-white px-16 py-10 ">
      <div className="bg-white p-2 max-w-max rounded-full mb-3 ">
        <ImQuotesLeft className="text-blue-500" />
      </div>
      <h1 className="text-4xl capitalize max-w-[8rem] ">Make a dream.</h1>
      <p className="relative  font-medium tracking-wide  px-6 py-8 mt-20 leading-6">
        Welcome to Factuly of Computing and Informatics
        <span className="absolute w-10 h-[2px] bg-white -bottom-1 -right-6"></span>
        <span className="absolute h-10 w-[2px] bg-white -right-1 -bottom-5"></span>
      </p>
      {/* <div className="flex justify-end">
        <div className="bg-white p-2 max-w-max rounded-full mb-3 ">
          <ImQuotesRight className="text-blue-500" />
        </div>
      </div> */}
    </article>
  );
};

export default Banner;
