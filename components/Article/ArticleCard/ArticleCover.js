import React from "react";
import Image from "next/image";
import { buildUrl, setConfig } from "cloudinary-build-url";
const ArticleCover = ({ coverImage }) => {
  if (!coverImage) return null;
  setConfig({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  });

  const public_id = coverImage.url.split("/")[8].split(".")[0];
  const src = buildUrl("public_id", {
    transformation: {
      resize: {
        type: "scale",
        width: 200,
        height: 200,
      },
    },
  });
  console.log(public_id);
  return (
    <div className="relative block text-center">
      <Image
        src={src}
        layout="responsive"
        height={coverImage.height}
        width={coverImage.width}
        alt="article image"
        className="hover:transform hover:scale-110 transition-all duration-300 "
      />
    </div>
  );
};

export default ArticleCover;
