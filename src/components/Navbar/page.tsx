"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import {RxCross1}from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();

  const triggerNavItem = (url: string) => {
    router.push(url);
  };
  const [mobileMenu, setMobileMenu] = useState(false);

  const triggerMobileNavItem = (url: string) => {
    router.push(url);
    setMobileMenu(false);
  };


  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="font-mono w-24 lg:w-48 text-2xl font-extrabold mx-12 text-pink-600">
              Ahsan.
            </h1>
          </Link>
        </div>
        <div className="hidden lg:block">
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
          <div className="block lg:hidden">
          
              <AiOutlineMenu onClick={() => setMobileMenu(mobileMenu)} className="text-4xl text-black mx-auto" />
            
          </div>
        </div>
      </div>
      <div
        className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden ${
          mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">

                <RxCross1 onClick={() => setMobileMenu(mobileMenu)} className="h-10 w-auto absolute top-0 right-0 mt-4 mr-4"/>
            
            <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("#about")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("#work")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("#service")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Service
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("#portfolio")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="py-2">
              <span
                onClick={() => triggerMobileNavItem("#contact")}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
