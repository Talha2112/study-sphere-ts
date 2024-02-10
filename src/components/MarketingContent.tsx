import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import girlReadingBook from "../assets/svgs/girl-reading-book.svg";

const MarketingContent= () => {
  return (
    <div className="text-black font-sans flex items-center justify-center h-full gap-y-3 pt-7 md:max-w-full lg:max-w-full ">
      <div className="flex flex-col items-center lg:flex-row lg:max-w-7xl  lg:px-8 lg:items-start">
      <div className="flex flex-col items-center lg:items-start lg:space-y-6  z-10  lg:mt-5 space-y-6">
        <div className="flex px-14 lg:px-0 ">
          <p className="scroll-m-20 text-5xl  font-bold lg:text-6xl md:text-6xl tracking-tight text-center">
            Your hub, your plans.
          </p>
        </div>
        <div className="flex  px-8 mt-3 md:mt-2 lg:px-0 ">
          <p className="font-semibold text-2xl text-center lg:text-start">
            Your own virtual classroom to teach, learn, organize, and
            collaborate.
          </p>
        </div>
        <Button className="drop-shadow-lg tracking-normal w-20 font-semibold text-md  px-14 md:mt-4 top-0.5 mt-4 relative">
        <a href="/login">Join now</a>
        </Button>{" "}
      </div>
      <Image
        src={girlReadingBook}
        width={600}
        height={200}
        alt="Image"
        className="lg:relative lg:left-[2rem] lg:w-[40rem] bottom-14"
      />
     
      </div>
    </div>
  );
};

export default MarketingContent;
