"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

// Define NavLinks
export const NavLinks = [
  { id: 1, url: "#home", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#resume", label: "Resume" },
  { id: 4, url: "#works", label: "Works" },
  { id: 5, url: "#skills", label: "Skills" },
  { id: 6, url: "#about", label: "About Me" },
  { id: 7, url: "#contact", label: "Contact" },
];

type Props = {
  openNav: () => void;
};

export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      {/* Main Container */}
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.jpg"
            alt="My logo"
            className="rounded-full border-2 border-violet-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
          />
          <h1 className="text-xl hidden tracking-[0.3cap] ml-2 text-cyan-400 sm:block md:text-2xl font-bold">
            Tanosh
            <span className="inline-block -ml-1 rotate-[-10deg] scale-90">
              ;
            </span>
            <span className="inline-block -ml-1 scale-y-125">;</span>
          </h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CV Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/resume/aljoy-bascon.pdf"
            download
            className="relative px-6 py-4 text-sm cursor-pointer rounded-xl 
               bg-white/10 backdrop-blur-md border border-white/40 
               text-white flex items-center space-x-2 
               transition-all duration-300 hover:bg-white/20 hover:scale-105
               shadow-lg"
          >
            <BiDownload className="w-5 h-5 text-cyan-300" />
            <span className="font-medium">Download Resume</span>
            {/* Shine effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>

        {/* Burger Menu (mobile trigger) */}
        <HiBars3BottomRight
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
          onClick={openNav}
        />
      </div>
    </div>
  );
}
