import React from "react";
import Image from "next/image";
import { Link } from "../Link";
import DateDisplay from "../Date";
import PropType from "prop-types";
const Article = ({ slug, title, coverImage, createdAt }) => {
  return (
    <Link href={"/articles/" + slug} className="mx-auto">
      <article className=" rounded-lg overflow-hidden bg-white ">
        {coverImage?.url ? (
          <div className="relative h-64">
            <Image
              src={coverImage.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="article image"
              className="hover:transform hover:scale-110 transition-all duration-300"
            />
          </div>
        ) : null}
        <div className=" p-4  ">
          <div className="flex items-center gap-2 mb-2">
            {/* FIXME  
                [ ] swap article image with authors image
                */}
            {coverImage?.url ? (
              <div className="relative rounded-full w-8 h-8 border border-black overflow-hidden">
                <Image
                  src={coverImage.url}
                  alt="user image"
                  width={50}
                  height={50}
                  // placeholder="blur"
                />
              </div>
            ) : null}

            <div className="text-sm">
              <p className="font-medium opacity-80 hover:opacity-100 transition-all duration-150">
                anabella
              </p>
              <DateDisplay date={createdAt} />
            </div>
          </div>
          <div className="ml-10">
            <h3 className=" text-lg capitalize font-semibold hover:text-blue-800 transition-all duration-150">
              {title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  );
};

Article.PropType = {
  title: PropType.string,
  body: PropType.string,
  slug: PropType.number,
};
export default Article;
