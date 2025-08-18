"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  "/images/dota.png",
  "/images/valorants.png",
  "/images/crossfire.png",
  "/images/left4dead.png",
  "/images/clashofclans.png",
];

const links = [
  "https://www.dota2.com/", // Dota 2
  "https://playvalorant.com/", // Valorant
  "https://crossfire.z8games.com/", // Crossfire
  "https://www.l4d.com/", // Left 4 Dead
  "https://supercell.com/en/games/clashofclans/", // Clash of Clans
];

export default function LogoCarousel() {
  const [duration, setDuration] = useState(25); // default desktop speed

  // ✅ Detect screen size and adjust speed
  useEffect(() => {
    const updateSpeed = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDuration(8); // very small devices → much faster
      } else if (w < 768) {
        setDuration(12); // mobile
      } else if (w < 1024) {
        setDuration(18); // tablet
      } else {
        setDuration(25); // desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-900 py-8">
      {/* 🌈 Blurred RGB Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[200px] h-[200px] rounded-full blur-[200px] opacity-30"
          animate={{
            backgroundColor: ["#ef4444", "#22c55e", "#3b82f6", "#ef4444"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated Heading */}
      <h1 className="relative text-center text-3xl md:text-5xl xl:text-6xl font-extrabold mb-14 tracking-widest uppercase z-10">
        <span className="relative inline-block">
          <span className="absolute inset-0 blur-md bg-gradient-to-r from-blue-900 via-purple-800/20 to-red-900 opacity-30"></span>

          <motion.span
            className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
              display: "inline-block",
            }}
          >
            My Games
          </motion.span>
        </span>
      </h1>

      {/* ✅ Infinite Logo Carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-20"
          animate={{ x: ["0%", "-100%"] }} // move entire row
          transition={{ repeat: Infinity, duration, ease: "linear" }}
        >
          {/* Duplicate 3x for smooth loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => {
            const link = links[i % links.length];
            return (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[200px]"
              >
                <Image
                  src={logo}
                  alt="Game Logo"
                  width={140}
                  height={80}
                  className="opacity-90 object-contain drop-shadow-[0_0_12px_rgba(255,0,0,0.4)] hover:scale-110 transition-transform duration-300"
                />
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
