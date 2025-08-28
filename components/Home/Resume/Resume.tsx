import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { MdSchool } from "react-icons/md";

export default function Resume() {
  return (
    <section className="pt-20 pb-16 w-[90%] sm:w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN - Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div className="mt-10 space-y-6">
            <ResumeCard
              Icon={BsDatabase}
              role="Full-Stack Developer - Not Yet"
              showFreshGraduate
            />
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer - Not Yet"
              showFreshGraduate
            />
            <ResumeCard
              Icon={FaReact}
              role="Queueing Management System"
              description="Developed a web-based queueing system to streamline service lines by automating ticket generation, monitoring queues, and tracking customer flow. Built using PHP, MySQL, HTML, CSS, and JavaScript."
            />
            <ResumeCard
              Icon={FaCodepen}
              role="Computer System Servicing (CSS) – Senior High School (2018 – 2020)"
              description="Acquired hands-on experience in PC assembly, system reformatting, and progressed my learnings to operating system installations, including Windows, Linux, Ubuntu, Fedora,  and Kali Linux for penetration testing and Metasploit Sessions."
            />
          </div>
        </div>

        {/* RIGHT COLUMN - Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div className="mt-10 space-y-6">
            <ResumeCard
              Icon={MdSchool}
              role="Bachelor of Science in Information Technology - University of Cebu Pardo and Talisay"
              date="2021 - 2025"
              showDate
              showFreshGraduate
              description="Developed a strong foundation in programming and IT, building several projects with PHP, HTML, CSS, JavaScript and MySQL. Expanded skills by learning React.js, MongoDB, and Atlas, and later advanced to using Next.js, Tailwind CSS, Framer Motion, and Supabase to focus on creating modern, responsive web applications."
            />
            <ResumeCard
              Icon={MdSchool}
              role="Secondary School - Talisay City National Highschool"
              date="2019 - 2020"
              showDate
              description="ICT CSS - Senior"
            />
            <ResumeCard
              Icon={MdSchool}
              role="Tertiary School - Argao National High School"
              date="2012 - 2017"
              showDate
              description="TVL Track – Cookery (Grade 10) - Junior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
