import React from "react";
import Image from "next/image";
import transformImage from "../../../utils/transformImage";
const ArticleCover = ({ coverImage }) => {
  if (!coverImage) return null;

  const public_id =
    coverImage?.public_id ??
    `articles/${coverImage.url.split("/")[8].split(".")[0]}`;

  const src = transformImage(public_id, {
    resize: {
      type: "scale",
      width: 270,
    },
  });

  // console.log("src ", src);
  // console.log("public id ", coverImage?.public_id, public_id);
  return (
    <div className="relative block text-center">
      <Image
        src={src}
        layout="responsive"
        height={150}
        width={200}
        alt="article image"
        className="hover:transform hover:scale-110 transition-all duration-300 "
      />
    </div>
  );
};

export default ArticleCover;
