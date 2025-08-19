"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticleBackground from "./ParticleBackground";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticleBackground />

      {/* Profile Image */}
      <div className="w-[150px] h-[150px] lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-8 border-[#0c0c48aa]">
        <Image
          src="/images/me-best.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
        <span className="text-white">Developer by </span>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Passion,
        </span>
        <br />
        <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          PenTester
        </span>
        <span className="text-white"> by Curiosity.</span>
      </h1>

      {/* Subtitle with Typewriter */}

      <h2 className="mt-5 text-center text-base sm:text-2xl font-medium">
        Hi!👋 I'm Aljoy – A Passionate{" "}
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Backend Developer",
              "Cybersecurity Enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName:
              "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold",
            cursorClassName: "text-cyan-400",
          }}
        />
      </h2>

      <Link href="#works" passHref>
        <button className="mt-6 px-6 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center">
          <span>Go to my Work</span>
          <BsArrowRight className="w-5 h-5 ml-2" />
        </button>
      </Link>
    </div>
  );
}
