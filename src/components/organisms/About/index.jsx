import React from "react";
import TitleSection from "../../atom/TitleSection";
import Feature from "./Feature";
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

const About = () => {
  return (
    <div className="my-20">
      <TitleSection title="about" />
      <Feature />
      <div className="flex md:flex-row flex-col gap-y-20 justify-center items-center mt-24">
        <div className="bg-red-400 flex-1">asd</div>
        <div className="flex-1">
          <p className="text-4xl font-semibold text-center mb-10">Skills</p>
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div className="text-center w-40  ">
              <SiHtml5 className="text-8xl text-[#dd4b25] m-auto " />
              <p className="text-lg mt-3">HTML</p>
            </div>
            <div className="text-center w-40  ">
              <SiCss3 className="text-8xl text-[#254bdd] m-auto " />
              <p className="text-lg mt-3">CSS</p>
            </div>

            <div className="text-center w-40  ">
              <BsBootstrapFill className="text-8xl text-[#7952b3] m-auto " />
              <p className="text-lg mt-3">Bootstrap</p>
            </div>

            <div className="text-center w-40  ">
              <SiTailwindcss className="text-8xl text-sky-400 m-auto " />
              <p className="text-lg mt-3">Tailwindcss</p>
            </div>
            <div className="text-center w-40  ">
              <SiJavascript className="text-8xl text-[#efd81d] m-auto " />
              <p className="text-lg mt-3">Javascript</p>
            </div>
            <div className="text-center w-40  ">
              <SiReact className="text-8xl text-[#57bdda] m-auto " />
              <p className="text-lg mt-3">React JS</p>
            </div>
            <div className="text-center w-40  ">
              <SiNextdotjs className="text-8xl text-black m-auto " />
              <p className="text-lg mt-3">Next.JS</p>
            </div>
            <div className="text-center w-40  ">
              <SiNodedotjs className="text-8xl text-[#6bbf47] m-auto " />
              <p className="text-lg mt-3">Node.JS</p>
            </div>
            <div className="text-center w-40  ">
              <SiExpress className="text-8xl text-gray-400 m-auto " />
              <p className="text-lg mt-3">ExpressJS</p>
            </div>
            <div className="text-center w-40  ">
              <SiMongodb className="text-8xl text-[#116149] m-auto " />
              <p className="text-lg mt-3">MongoDB</p>
            </div>
            <div className="text-center w-40  ">
              <DiGit className="text-8xl text-red-500 m-auto " />
              <p className="text-lg mt-3">Git</p>
            </div>
            <div className="text-center w-40  ">
              <SiRedux className="text-8xl text-[#764abc] m-auto " />
              <p className="text-lg mt-3">Redux</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
