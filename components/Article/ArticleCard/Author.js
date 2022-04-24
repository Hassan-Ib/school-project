import React from "react";
import DateDisplay from "../../Date";
import Image from "next/image";

const Author = ({ authorAvatar, authorName = "annabella", createdAt }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      {/* FIXME  
            [ ] swap article image with authors image
      */}
      {authorAvatar?.url ? (
        <div className="relative rounded-full w-8 h-8 border border-black overflow-hidden">
          <Image
            src={authorAvatar.url}
            alt="user image"
            width={50}
            height={50}
            // placeholder="blur"
          />
        </div>
      ) : null}

      <div className="text-sm">
        <p className="font-medium opacity-80 hover:opacity-100 transition-all duration-150">
          {authorName}
        </p>
        <DateDisplay date={createdAt} />
      </div>
    </div>
  );
};

export default Author;
