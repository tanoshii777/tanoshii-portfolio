import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Service/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import GamesCarousel from "./Games/GamesCarousel";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen">
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="works">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="games">
        <GamesCarousel />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
