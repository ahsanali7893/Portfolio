"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import React from "react";

const Hero = (props: any) => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
      <div className="container relative z-30 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-header text-4xl sm:text-5xl md:text-6xl mb-4">
            Hello,
            <span className="block text-pink-600">
              <TypeAnimation
                sequence={[
                  " I am Ahsan Ali",
                  1000,
                  "I am a React Developer",
                  1000,
                  "I am a Next.js Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Frontend Developer | UI/UX Enthusiast
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center sm:space-y-0 space-y-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Download CV
            </Link>
            <div className="flex items-center mb-6 sm:mb-0">
              <Link
                href="https://www.linkedin.com/in/ahsan-ali-334403280/"
                className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                target="_blank"
              >
                <FaLinkedin className="text-white hover:text-blue-500" />
              </Link>
              <Link
                href="https://github.com/ahsanali7893"
                className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                target="_blank"
              >
                <BsGithub className="text-white hover:text-gray-500" />
              </Link>
              <Link
                href="https://twitter.com/EhsanAl13204331?t=sjfdVnaWqQ877jP5Gj-gvQ&s=09"
                className="mx-2 text-xl transition duration-300 transform hover:scale-110"
                target="_blank"
              >
                <BsTwitter className="text-white hover:text-blue-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0 mb-8 mr-8 text-yellow-500">
        <AiOutlineArrowRight className="text-4xl" />
      </div>
    </div>
  );
};

export default Hero;
