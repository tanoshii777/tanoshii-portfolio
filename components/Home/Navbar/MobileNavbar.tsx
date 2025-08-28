"use client";

import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { NavLinks } from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNavbar({ showNav, closeNav }: Props) {
  return (
    <AnimatePresence>
      {showNav && (
        <div>
          {/* Overlay (fades in/out) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={closeNav}
            className="fixed inset-0 z-[100002] bg-black w-full h-screen"
          />

          {/* Sidebar (slides from right) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] 
                       bg-pink-500/30 backdrop-blur-lg space-y-6 z-[1000050] right-0 
                       border-l border-white/20 rounded-l-2xl shadow-2xl p-8"
          >
            {/* Nav Links */}
            {NavLinks.map((link) =>
              link.label === "Resume" ? (
                <a
                  key={link.id}
                  href="/resume/Aljoy-Bascon.pdf"
                  download
                  onClick={closeNav}
                  className="text-white text-xl sm:text-2xl border-b border-white/20 pb-1 
                             w-fit transition-all duration-200 hover:text-cyan-300 
                             hover:translate-x-1 block"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.id} href={link.url} onClick={closeNav}>
                  <p
                    className="text-white text-xl sm:text-2xl border-b border-white/20 pb-1 
                               w-fit transition-all duration-200 hover:text-cyan-300 
                               hover:translate-x-1"
                  >
                    {link.label}
                  </p>
                </Link>
              )
            )}

            {/* Close Button */}
            <CgClose
              onClick={closeNav}
              className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer 
                         hover:text-red-400 transition-colors"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
