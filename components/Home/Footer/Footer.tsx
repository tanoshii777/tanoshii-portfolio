import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-900/20 p-5">
      <p className="text-sm md:text-base text-white/70 text-center font-medium">
        © {new Date().getFullYear()} Aljoy Remonde Bascon. All rights reserved.
      </p>
    </div>
  );
}
