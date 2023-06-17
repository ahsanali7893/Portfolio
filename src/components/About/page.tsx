import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-gray-50" id="about">
      <div className="container flex flex-col justify-center items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold text-center uppercase text-primary sm:text-5xl lg:text-6xl text-[#66b3b3]">
            Who Iam i?
          </h2>
          <h4 className="pt-6 font-header text-xl text-center font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Ahsan Ali, a Web developer
          </h4>
          <p className="pt-6 font-body text-center leading-relaxed text-grey-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-center">
            <div className="flex  justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-gray-400">
                Let's Connect
              </p>
              <div className="hidden sm:block items-center">
                <AiOutlineArrowRight className="text-3xl text-yellow-500" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link
                href={"/"}
                className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-blue-500"
              >
                <BsFacebook />
              </Link>
              <Link
                href={"/"}
                className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-blue-500"
              >
                <BsTwitter />
              </Link>
              <Link
                href={"/"}
                className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-pink-500"
              >
                <BsInstagram />
              </Link>
              <Link
                href={"/"}
                className="mx-2 text-xl text-gray-400 transition duration-400 hover:text-gray-500"
              >
                <BsGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#66b3b3] text-primary sm:text-5xl lg:text-6xl">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="hover:">
                        <img src="./html.png" alt="html" className="cursor-pointer "  />
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
