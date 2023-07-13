"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="w-full opacity-1000 z-50 top-0 py-3 sm:py-5 shadow-xl sticky"
      style={{ backgroundColor: "rgba(0, 128, 128, 0.6)" }}
    >
      <div className="container flex items-center h-full w-full 2xl:px-16 justify-between px-5">
        <div>
          <Link href="/">
            <h1 className="font-mono w-24 lg:w-48 text-2xl font-extrabold text-pink-600">
              Ahsan.
            </h1>
          </Link>
        </div>
        <div className=" hidden sm:flex">
          <div className="flex items-center text-sm">
            <li className="group pl-6 list-none py-4">
              <Link
                href={"#about"}
                className="cursor-pointer py-4 pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </Link>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <Link
                href={"#skill"}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Skill
              </Link>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <Link
                href={"#portfolio"}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </Link>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <Link
                href={"#contact"}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </Link>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
          </div>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          <AiOutlineMenu size={25} className="text-white" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#66b3b3] p-10 ease-in duration-500"
            : "fixed right-[-100%] top-0 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineClose size={25} className="text-white" />
          </div>
        </div>
        <div className="flex-col py-10 text-center">
          <li className="group pl-6 list-none">
            <Link
              href={"#about"}
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >
              About
            </Link>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
          </li>
          <li className="group pl-6 list-none">
            <Link
              href={"#skill"}
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >
              Skill
            </Link>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
          </li>

          <li className="group pl-6 list-none">
            <Link
              href={"#portfolio"}
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >
              Portfolio
            </Link>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
          </li>
          <li className="group pl-6 list-none">
            <Link
              href={"#contact"}
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >
              Contact
            </Link>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
