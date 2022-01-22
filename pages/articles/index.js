import React from "react";
import { getLayoutWithNavAndFooter, ArticleCard } from "../../components";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { articles as articleData } from "../../utils/articleData";
const Articles = () => {
  return (
    <main className="md:grid md:grid-cols-3">
      {/* side bar */}
      {/* articles container */}
      <section className="flex flex-col gap-16 md:col-start-1 md:col-end-3 py-10 px-6 ">
        {/* {articleData.map({ Id, image, title }, index)} */}
        <ArticleCard {...articleData[0]} />
        <ArticleCard {...articleData[0]} />
        <ArticleCard {...articleData[0]} />
        <ArticleCard {...articleData[0]} />
        <ArticleCard {...articleData[0]} />
      </section>

      <section className="py-10 px-6 md:py-10 ">
        {/* search input */}
        <section
          tabIndex={0}
          className="relative items-center shadow-sm text-birch-800 bg-twine-100 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter search keyword..."
            className="p-4 pr-12 inline-block w-full bg-inherit outline-twine-500 outline-offset-5 group border rounded-md"
          />
          <button className="absolute z-10 right-0 h-full px-2 hover:bg-twine-500 hover:text-white transition-all duration-300">
            <AiOutlineSearch className="text-2xl font-bold" />
          </button>
        </section>
        {/* recent post */}
        <section className=" text-twine-700 font-medium">
          <h1 className=" my-10 text-2xl font-semibold">Recent posts</h1>
          <p className="opacity-80 my-6">
            Meet Hassan Ibrahim the awesome frontend developer that made this
            happen
          </p>
          <p className="opacity-80 my-6">
            Meet Hassan Ibrahim the awesome frontend developer that made this
            happen
          </p>{" "}
          <p className="opacity-80 my-6">
            Meet Hassan Ibrahim the awesome frontend developer that made this
            happen
          </p>
        </section>
        {/* recent Events */}
        <section className=" text-twine-700 font-medium">
          <h1 className=" my-10 text-2xl font-semibold">Recent Events</h1>
          <div className="opacity-80 my-6 flex flex-col gap-2">
            <p>
              Artificial intelligence and the its shortcomming, why it wont
              totally replace human in the work industry nad why it will
            </p>
            <span className="flex items-center gap-2">
              {" "}
              <AiOutlineClockCircle /> 10 : 40 monday 14, 2022
            </span>
            <span className="flex items-center gap-2">
              <GoLocation /> 1200lt{" "}
            </span>
          </div>
        </section>
      </section>
    </main>
  );
};

Articles.getLayout = getLayoutWithNavAndFooter;

export default Articles;
