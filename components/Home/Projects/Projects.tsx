"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";

// Reusable Project component
function ProjectCard({ navId, slides }: any) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Handle keyboard + mobile back button
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };

    const handlePopState = () => {
      setLightboxOpen(false);
    };

    if (lightboxOpen) {
      document.addEventListener("keydown", handleKey);
      window.history.pushState({ lightbox: true }, ""); // add history state
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [lightboxOpen]);

  return (
    <div className="relative">
      {/* Normal card swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.next-${navId}`,
          prevEl: `.prev-${navId}`,
        }}
        slidesPerView={1}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {slides.map((slide: any, idx: number) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[400px] cursor-pointer bg-black"
              onClick={() => {
                setStartIndex(idx);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={slide.src}
                alt={`${slide.title || "Project"} Preview ${idx + 1}`}
                fill
                className="rounded-lg object-contain" // 👈 fixed: no cropping
              />

              {(slide.title || slide.tech) && (
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  {slide.title && (
                    <h1 className="text-lg sm:text-xl font-semibold text-white">
                      {slide.title}
                    </h1>
                  )}
                  {slide.tech && (
                    <h1 className="text-sm font-medium text-white/80">
                      {slide.tech}
                    </h1>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <button
        className={`prev-${navId} absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60`}
      >
        <BiChevronLeft size={22} />
      </button>
      <button
        className={`next-${navId} absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60`}
      >
        <BiChevronRight size={22} />
      </button>

      {/* Lightbox fullscreen */}
      {lightboxOpen && (
        <div className="fixed left-0 right-0 top-[80px] bottom-0 bg-black/90 z-50 flex flex-col">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-4xl z-50"
            onClick={() => {
              setLightboxOpen(false);
              window.history.back(); // return to previous state
            }}
          >
            <BiX />
          </button>

          {/* Fullscreen swiper */}
          <Swiper
            modules={[Navigation]}
            navigation
            initialSlide={startIndex}
            className="w-full h-full"
          >
            {slides.map((slide: any, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-[90%] h-[80%] bg-black">
                    <Image
                      src={slide.src}
                      alt={`${slide.title || "Project"} Full ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {(slide.title || slide.tech) && (
                    <div className="text-center mt-4 px-6">
                      {slide.title && (
                        <h1 className="text-xl font-bold text-white">
                          {slide.title}
                        </h1>
                      )}
                      {slide.tech && (
                        <p className="text-md text-gray-300">{slide.tech}</p>
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
export default function Projects() {
  return (
    <div className="pt-16 pb-16">
      {/* Section Title */}
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Featured Works and <br />
        <span className="text-cyan-400">Projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <ProjectCard
          navId="1"
          slides={[
            {
              src: "/images/Bios.png",
              title: "Bio'S Student Management Dashboard System",
              tech: "Figma UI/UX",
            },
            {
              src: "/images/dash1.png",
              title: "Dashboard - Student Records",
              tech: "Figma Prototype",
            },
            {
              src: "/images/dash2.png",
              title: "Dashboard - Analytics",
              tech: "Charts & Reports",
            },
            {
              src: "/images/dash3.png",
              title: "Dashboard - Users",
              tech: "Monitoring Users",
            },
          ]}
        />

        <ProjectCard
          navId="2"
          slides={[
            {
              src: "/images/admin.png",
              title: "Admin Authentication Module",
              tech: "Figma UI/UX",
            },
            {
              src: "/images/admin1.png",
              title: "Login Page",
              tech: "Modern UI",
            },
            {
              src: "/images/admin2.png",
              title: "Dashboard",
              tech: "Secure Auth",
            },
          ]}
        />

        <ProjectCard
          navId="3"
          slides={[
            {
              src: "/images/que.jpg",
              title: "Queueing Management System",
              tech: "PHP, MySQL, JS",
            },
            {
              src: "/images/pogi1.jpg",
              title: "",
              tech: "",
            },
            {
              src: "/images/pogi2.jpg",
              title: "",
              tech: "",
            },
            {
              src: "/images/pogi3.jpg",
              title: "",
              tech: "",
            },
            {
              src: "/images/pogi4.jpg",
              title: "",
              tech: "",
            },
          ]}
        />

        <ProjectCard
          navId="4"
          slides={[
            {
              src: "/images/movie (3).png",
              title: "JoyFlix Dashboard",
              tech: "Next.js, TMDB API",
            },
            {
              src: "/images/movie (1).png",
              title: "Sign In",
              tech: "Dynamic Grid",
            },
            {
              src: "/images/movie (2).png",
              title: "Movie Details",
              tech: "Banner & Trailer animations",
            },
            {
              src: "/images/movie.png",
              title: "Sign-up",
              tech: "Sign-up details",
            },
            {
              src: "/images/working....png",
            },
          ]}
        />
      </div>
    </div>
  );
}
