import {
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-8 h-8" />,
    percentage: 70,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white w-8 h-8" />,
    percentage: 85,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 w-8 h-8" />,
    percentage: 73,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 w-8 h-8" />,
    percentage: 89,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 w-8 h-8" />,
    percentage: 72,
  },
];

export default function Skills() {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-[80%] mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {skill.icon}
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-cyan-400 h-3 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>

            <p className="text-sm mt-2 text-gray-400">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
