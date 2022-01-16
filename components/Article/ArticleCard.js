import React from "react";
import Image from "next/image";
import H2 from "../Typograhpy/H2";
import Paragraph from "../Typograhpy/Paragraph";
import { Link } from "../Link";
import PropType from "prop-types";
const Article = ({ Id, title, body, image }) => {
  // console.log(props);
  return (
    <Link href={"/articles/" + Id} className=" shadow mx-auto">
      <article className="border-2  border-black rounded-lg overflow-hidden">
        <div className="relative block h-60 w-full ">
          <Image
            src={`/img/${image}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="article image"
            className="hover:transform hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className=" p-4  ">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative rounded-full w-8 h-8 border border-black overflow-hidden">
              <Image
                src={`/img/${image}`}
                layout="fill"
                alt="user image"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium opacity-80 hover:opacity-100 transition-all duration-150">
                anabella
              </p>
              {/* <time dateTime="" /> */}
              <p className="opacity-80 hover:opacity-100 transition-all duration-150">
                Dec 31 &apos;21 (18hours ago)
              </p>
            </div>
          </div>
          <div className="ml-10">
            <h2 className="text-2xl font-bold hover:text-blue-800 transition-all duration-150">
              No way {title}
            </h2>
            <p className="mt-2 opacity-80">{body} ...</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Article.PropType = {
  title: PropType.string,
  body: PropType.string,
  Id: PropType.number,
};
export default Article;
