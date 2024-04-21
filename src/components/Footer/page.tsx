import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="container flex flex-col justify-between py-6 sm:flex-row max-w-6xl mx-auto">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, AHSAN.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link
            href="https://github.com/ahsanali7893"
            className="mx-2 text-xl text-white transition duration-400 hover:text-gray-500"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://twitter.com/EhsanAl13204331?t=sjfdVnaWqQ877jP5Gj-gvQ&s=09"
            className="mx-2 text-xl text-white transition duration-400 hover:text-blue-500"
          >
            <BsTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
