import React, { useState } from "react";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiGit } from "react-icons/di";

const Skill = () => {
  const [skills, setSkills] = useState([
    {
      name: "HTML",
      icon: <SiHtml5 />,
      color: "text-[#dd4b25]",
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
      color: "text-[#254bdd]",
    },
    {
      name: "Bootstrap",
      icon: <BsBootstrapFill />,
      color: "text-[#7952b3]",
    },
    {
      name: "Tailwindcss",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
      color: "text-[#efd81d]",
    },
    {
      name: "React JS",
      icon: <SiReact />,
      color: "text-[#57bdda]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-black",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "text-[#6bbf47]",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-400",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-[#116149]",
    },
    {
      name: "Git",
      icon: <DiGit />,
      color: "text-red-500",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "text-[#764abc]",
    },
  ]);

  return (
    <div className="flex md:flex-row flex-col gap-y-20 justify-center items-center mt-24">
      <div className="bg-red-400 flex-1">asd</div>
      <div className="flex-1">
        <p className="text-4xl font-semibold text-center mb-10">Skills</p>
        <div className="flex justify-center items-center gap-7 flex-wrap">
          {skills.map((skill, i) => (
            <div className="flex flex-col items-center w-40 gap-1" key={i}>
              <div className={`text-5xl ${skill.color}`}>{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
