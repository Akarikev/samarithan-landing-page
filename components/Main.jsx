import React from "react";
import Image from "next/image";
import samarithan4 from "../images/samarithan4.jpg";
import Link from "next/link";
import Faqs, { Accordion } from "./Faqs";
import Contact from "./contact";

const Main = () => {
  return (
    <div
      className="dark:bg-slate-800 dark:text-gray-100 text-gray-400 pb-4"
      id="features"
    >
      <h1 className=" font-extrabold text-2xl text-center  lg:text-4xl mt-7 hover:scale-90 duration-200 cursor-pointer text-gray-800 dark:text-gray-300">
        <span className="underline  "> SAM</span> ON YOUR{" "}
        <span className="p-2 bg-green-400 rounded-full font-extrabold underline dark:text-gray-800">
          WHATSAPP
        </span>
      </h1>
      <div className="relative w-[350px]  h-[700px]  mt-7 mx-auto rounded-full  md:w-[350px]   md:h-[700px]  ">
        <Image
          src={samarithan4}
          alt="samarithan"
          fill
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className="absolute z-50  top-[780px] right-1 p-2 bg-green-500 text-gray-100 rounded-full opacity-90  md:right-[200px] lg:right-[230px] lg:top-[800px] hover:scale-75 duration-300 cursor-pointer">
        <p className="text-center font-medium">chat with sam on whatsApp 🎉</p>
      </div>
      <div className="absolute z-50  top-[75em] left-1 p-2 px-2 bg-cyan-500 text-gray-100 rounded-full opacity-90 md:left-[200px] md:top-[990px] hover:scale-75 duration-300 cursor-pointer">
        <p className="text-center font-medium">
          Easily interact on WhatsApp 🎉
        </p>
      </div>

      <div className="text-center px-2 mt-3 pb-2">
        <h1 className=" font-medium text-gray-600 dark:text-gray-300">
          Easily interact with sam just say, 'chatGPT on your WhatsApp'
        </h1>
      </div>

      <div className="flex justify-center content-center pt-1 font-bold transition-all duration-300 lg:mt-4 md:mt-4 mt-3 hover:scale-95 ">
        <Link
          href="https://wa.me/message/GGWYRLOO2377F1"
          className="bg-green-600 text-gray-100 p-2 px-6 font rounded-lg transition-all duration-300"
        >
          Get Started
        </Link>
      </div>

      <div className="mt-4 text-gray-900">
        <h1 className="text-center underline ring-offset-1 dark:text-gray-300">
          FAQs
        </h1>
        <Faqs />
      </div>

      <div>{/* <Contact /> */}</div>
    </div>
  );
};

export default Main;
