import React from "react";
import Image from "next/image";
import H2 from "../Typograhpy/H2";
import Paragraph from "../Typograhpy/Paragraph";
import { Link } from "../Link";
import PropType from "prop-types";
const Article = ({ Id, title, body, image }) => {
  // console.log(props);
  return (
    <article className=" max-w-xl border-2 border-black rounded-lg overflow-hidden">
      <Link href={"/articles/" + Id}>
        <div className="relative block h-60">
          <Image
            src={`/img/${image}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="article image"
          />
        </div>
        <div className=" p-4">
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
                Dec 31 '21 (18hours ago)
              </p>
            </div>
          </div>
          <H2 className="text-xl ml-10 font-bold hover:text-blue-800 transition-all duration-150">
            no way {title}
          </H2>
        </div>
      </Link>
    </article>
  );
};

Article.PropType = {
  title: PropType.string,
  body: PropType.string,
  Id: PropType.number,
};
export default Article;
