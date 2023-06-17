"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Url } from "next/dist/shared/lib/router/router";

const Navbar = () => {
  const triggerNavItem = (url: Url) => {};

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between px-5">
        <div>
          <Link href="/">
            <h1 className="font-mono w-24 lg:w-48 text-2xl font-extrabold text-pink-600">
              Ahsan.
            </h1>
          </Link>
        </div>
        <div className=" hidden sm:flex">
          <div className="flex items-center">
            <li className="group pl-6 list-none">
              <span
                onClick={() => triggerNavItem("#about")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span
                onClick={() => triggerNavItem("#work")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span
                onClick={() => triggerNavItem("#service")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Service
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span
                onClick={() => triggerNavItem("#portfolio")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span
                onClick={() => triggerNavItem("#contact")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
          </div>
        </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineMenu size={25} className="text-white" />
          </div>
      </div>
      <div className={
        menuOpen
        ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[rgba(0, 128, 128, 0.6)] p-10 ease-in duration-500'
        : 'fixed right-[-100%] top-0 ease-in duration-500'
      }>
          <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineClose size={25} className="text-white" />
          </div>
          </div>  
      </div>
    </div>
  );
};

export default Navbar;
