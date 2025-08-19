"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-gray-900 via-[#0d0d1a] to-gray-900">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - Info + Socials */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            I&apos;m eager to begin my career journey and contribute my skills
            to a forward-thinking company. With a strong foundation in
            technology, I&apos;m ready to adapt and learn new knowledge. If
            you&apos;re looking for someone driven, consistent, adaptable, and
            committed to growth. Tanoshii — &apos;s connect!
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-4">
              <BiPhone className="w-8 h-8 text-cyan-400" />
              <p className="text-lg text-gray-300 font-medium">
                +63 966 278 8738
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <BiEnvelope className="w-8 h-8 text-cyan-400" />
              <a
                href="mailto:aljoybascon.programmer@gmail.com"
                className="text-lg text-gray-300 font-medium underline hover:text-cyan-300 transition-colors"
              >
                aljoybascon.programmer@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <BiMap className="w-8 h-8 text-cyan-400" />
              <p className="text-lg text-gray-300 font-medium">
                Poblacion, Talisay City
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-10 space-x-5">
            <a
              href="https://www.facebook.com/tanoshiijoy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                         transition-transform transform hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <FaFacebook className="text-white w-5 h-5" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                         transition-transform transform hover:scale-110 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/50"
            >
              <FaYoutube className="text-white w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/tanoshii.joy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
                         transition-transform transform hover:scale-110 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaInstagram className="text-white w-5 h-5" />
            </a>

            <a
              href="https://kick.com/tanoshii777/videos/f94ed2d0-6a2c-44c0-82d4-8d9e31923f1c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center 
             transition-transform transform hover:scale-110 hover:bg-gradient-to-br hover:from-[#00FF00] hover:to-green-700 hover:shadow-lg hover:shadow-[#00FF00]/50"
            >
              {/* For now using a bold K, can replace with Kick SVG */}
              <span className="text-[#00FF00] font-extrabold text-lg">K</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Functional Form */}
        <div
          className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-transparent bg-clip-padding 
                        [background-image:linear-gradient(#111827,#111827),linear-gradient(to_right,#06b6d4,#3b82f6)] 
                        [background-origin:border-box] [background-clip:content-box,border-box]"
        >
          <ContactForm /> {/* 👈 uses your working form now */}
        </div>
      </div>
    </div>
  );
}
