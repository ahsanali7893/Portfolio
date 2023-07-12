import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div style={{ backgroundColor: "rgba(0, 128, 128, 0.6)" }}>
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2023. All right reserved, AHSAN.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Link
            href={"/"}
            className="mx-2 text-xl text-white transition duration-400 hover:text-blue-500"
          >
            <BsFacebook />
          </Link>
          <Link
            href={"/"}
            className="mx-2 text-xl text-white transition duration-400 hover:text-blue-500"
          >
            <BsTwitter />
          </Link>
          <Link
            href={"/"}
            className="mx-2 text-xl text-white transition duration-400 hover:text-pink-500"
          >
            <BsInstagram />
          </Link>
          <Link
            href={"/"}
            className="mx-2 text-xl text-white transition duration-400 hover:text-gray-500"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
