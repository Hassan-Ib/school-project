import React from "react";
import H2 from "../Typograhpy/H2";
import Paragraph from "../Typograhpy/Paragraph";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";

const Event = () => {
  return (
    <section className="mb-8 flex flex-col items-center md:flex-row md:gap-7 md:justify-center md:items-start">
      <div className=" w-36 h-36 bg-twine-500 text-twine-500 text-center  mb-5">
        <div className=" m-auto w-3/4 bg-white h-5/6">
          <h1 className=" font-extrabold text-5xl">08</h1>
          <h3 className=" font-semibold text-3xl">oct</h3>
          <h5 className="font-medium"> 2021</h5>
        </div>
      </div>
      <section className=" text-blue-800 capitalize ">
        <H2>
          frontend technologies with python (django){" "}
          <span className=" inline-block px-2 py-1 bg-twine-500 text-white text-base tracking-wider rounded-2xl">
            Talk
          </span>
        </H2>
        <Paragraph className="flex items-center">
          <GoLocation className=" mr-1" />
          virtual online
        </Paragraph>
        <Paragraph className="flex items-center">
          <AiOutlineClockCircle className=" mr-1" />
          10:30 - 15:30 pDT
        </Paragraph>
        <Paragraph className=" ">
          How to build client side of any software with the rigth tool in your
          arsenal
        </Paragraph>
      </section>
    </section>
  );
};

export default Event;
