import Link from "next/link";
import { BiHomeAlt2, BiAdjust } from "react-icons/bi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import HeaderItem from "./HeaderItem";

import { useState } from "react";
import Main from "./Main";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="px-3 pt-4 dark:bg-slate-800">
        <span className="float-right ">
          <BiAdjust
            className="w-7 h-7 cursor-pointer text-gray-800 mr-3 mt-2 dark:text-gray-300"
            onClick={() => setDarkMode(!darkMode)}
          />
        </span>
        <nav className="flex flex-col ">
          <h1 className=" text-gray-800 font-bold text-5xl text-center transition duration-100 transform hover:scale-110 cursor-pointer dark:text-gray-300">
            samarithan
          </h1>
          <ul className="flex justify-center content-center">
            <li className="flex justify-evenly gap-8">
              <Link href="/" className="text-center">
                <HeaderItem title="HOME" Icon={BiHomeAlt2} className="" />
              </Link>
              <Link href="#features">
                <HeaderItem title="FEATURES" Icon={MdOutlineFeaturedPlayList} />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-3 lg:px-40 md:px-30">
          <h1 className="font-extrabold text-2xl sm:px-2 text-center  lg:text-4xl dark:text-gray-300">
            The Future of{" "}
            <span className="p-1 px-2 bg-green-400 text-white rounded-full">
              WhatsApp
            </span>
            {""} AI Technology
          </h1>
          <div className="flex justify-center content-center pt-5 font-bold gap-9 transition-all duration-300 lg:mt-4 md:mt-4 mt-3">
            <Link
              href="https://wa.me/message/GGWYRLOO2377F1"
              className="bg-green-600 text-gray-100 p-2 px-6 font rounded-lg hover:bg-white hover:text-gray-800  transition-all duration-300"
            >
              Get Started
            </Link>
            <div className="flex text-center gap-3 bg-red-600 text-gray-100 p-2 px-4 font rounded-lg cursor-pointer">
              <AiOutlinePlayCircle className="h-6 w-5 text-center hover:rotate-180 transition-all duration-300" />
              <button className=" text-center ">Watch Demo</button>
            </div>
          </div>

          <p className="text-center leading-7 mt-4 px-5 text-gray-500 font-medium md:text-xl md:px-0 dark:text-gray-300">
            Meet{" "}
            <span className="bg-black text-gray-100 p-1 rounded-md font-bold transition duration-100 transform hover:scale-125 cursor-pointer">
              Samarithan
            </span>{" "}
            or Sam, an <span className="underline">AI language model</span>{" "}
            chatbot designed to help users with their questions and provide
            information on a variety of topics. Created by Daedalus IS and
            programmed to understand natural language commands and generate
            relevant responses.
          </p>

          <p className="text-center leading-7 mt-4 p-3 text-gray-200 font-medium bg-cyan-700 rounded-md lg:px-6   ">
            The goal is to provide accurate and helpful information, and assist
            users in finding answers to their inquiries. 🖥
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
