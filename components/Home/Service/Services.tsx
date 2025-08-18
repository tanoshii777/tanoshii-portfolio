import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Crafting websites that <br /> blend design, performance, <br />
        and security.
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <ServiceCard
          icon="/images/s1.png"
          name="Modern Web Development"
          description="Building fast, responsive, and scalable websites tailored to your needs."
        />
        <ServiceCard
          icon="/images/s2.png"
          name="UI/UX Design"
          description="Creating sleek, user-friendly interfaces that deliver seamless experiences."
        />
        <ServiceCard
          icon="/images/window-card.png"
          name="Performance Optimization"
          description="Improving speed, accessibility, and SEO for better engagement."
        />
        <ServiceCard
          icon="/images/secure-card.png"
          name="Web Hardening"
          description="Implementing strategies to minimize vulnerabilities and strengthen security."
        />
      </div>
    </div>
  );
}
