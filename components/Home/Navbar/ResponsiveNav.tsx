"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  function openNavHandler() {
    setShowNav(true);
  }

  function closeNavHandler() {
    setShowNav(false);
  }

  return (
    <div>
      <Nav openNav={openNavHandler} />
      {showNav && <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />}
    </div>
  );
}
