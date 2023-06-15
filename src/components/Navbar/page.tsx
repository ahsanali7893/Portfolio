"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  
  const triggerNavItem = (url: string) => {
    router.push(url);
  };

  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-mono w-24 lg:w-48 text-2xl font-extrabold mx-12 text-pink-600">
              Ahsan.
            </h1>
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center">
            <li className="group pl-6 list-none">
              <span onClick={() => triggerNavItem("#about")} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span onClick={() => triggerNavItem("#work")} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span onClick={() => triggerNavItem("#service")} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Service</span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span onClick={() => triggerNavItem("#portfolio")} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
            <li className="group pl-6 list-none">
              <span onClick={() => triggerNavItem("#contact")} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>
              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-500"></span>
            </li>
          </div>
          <div className="block lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;