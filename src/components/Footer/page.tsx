import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="container flex flex-col justify-between py-6 sm:flex-row max-w-6xl mx-auto">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, AHSAN.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link
            href="https://www.linkedin.com/in/ahsan-ali-334403280/"
            className="mx-2 text-xl transition duration-300 transform hover:scale-110"
            target="_blank"
          >
            <FaLinkedin className="text-white hover:text-gray-300" />
          </Link>
          <Link
            href="https://github.com/ahsanali7893"
            className="mx-2 text-xl transition duration-300 transform hover:scale-110"
            target="_blank"
          >
            <BsGithub className="text-white hover:text-gray-300" />
          </Link>
          <Link
            href="https://twitter.com/EhsanAl13204331?t=sjfdVnaWqQ877jP5Gj-gvQ&s=09"
            className="mx-2 text-xl transition duration-300 transform hover:scale-110"
            target="_blank"
          >
            <BsTwitter className="text-white hover:text-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
