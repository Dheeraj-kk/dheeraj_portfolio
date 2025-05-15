import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaDatabase, FaMicrosoft } from "react-icons/fa";
import { RiCursorFill } from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500 text-4xl" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-500 text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
  },
  {
    name: "React.js",
    icon: <SiReact className="text-cyan-300 text-4xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 text-4xl" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-yellow-400 dark:text-blue-400 text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-4xl" />,
  },
  {
    name: "SQL Server",
    icon: <FaDatabase className="text-red-600 text-4xl" />,
  },
  {
    name: "ASP.NET MVC",
    icon: <FaMicrosoft className="text-purple-600 text-4xl" />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-600 text-4xl" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white dark:text-gray-200 text-4xl" />,
  },
  {
    name: "Cursor IDE",
    icon: <RiCursorFill className="text-green-400 text-4xl" />,
  },
];

const Skills = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-white">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-8 gap-6">
        {skills.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Skills;
