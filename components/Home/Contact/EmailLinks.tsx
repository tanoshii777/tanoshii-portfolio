"use client";

import { useEffect, useState } from "react";
import { BiEnvelope } from "react-icons/bi";

export default function EmailLink() {
  {
    /** FUNCTION OF THE DESKTOP AND MOBILE EMAILING */
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <BiEnvelope className="w-8 h-8 text-cyan-400" />
      <a
        href={
          isMobile
            ? "mailto:aljoybascon.programmer@gmail.com"
            : "https://mail.google.com/mail/?view=cm&fs=1&to=aljoybascon.programmer@gmail.com"
        }
        target={isMobile ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="text-lg text-gray-300 font-medium underline hover:text-violet-400 transition-colors"
      >
        aljoybascon.programmer@
      </a>
    </div>
  );
}
