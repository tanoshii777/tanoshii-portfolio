import React from "react";
import Image from "next/image";

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
        {/** First Project */}
        <div>
          <Image
            src="/images/Bios.png"
            alt="Project Preview"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Bio'S Student Management Dashboard System
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Figma UI/UX</h1>
        </div>

        {/** Second Project */}
        <div>
          <Image
            src="/images/admin.png"
            alt="Project Preview"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Admin Authentication Module
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Figma UI/UX</h1>
        </div>

        {/** Third Project */}
        <div>
          <Image
            src="/images/que.jpg"
            alt="Project Preview"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Queueing Management System
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            PHP, MySQL, HTML, CSS, and JavaScript
          </h1>
        </div>

        {/** Fourth Project */}
        <div>
          <Image
            src="/images/upcoming.png"
            alt="Project Preview"
            width={800}
            height={650}
            className="rounded-lg shadow-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Still Working on something...
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Something Awesome</h1>
        </div>
      </div>
    </div>
  );
}
