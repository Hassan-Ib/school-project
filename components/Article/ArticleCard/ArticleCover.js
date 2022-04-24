import React from "react";
import Image from "next/image";
const ArticleCover = ({ coverImage }) => {
  if (!coverImage) return null;
  return (
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
  );
};

export default ArticleCover;
