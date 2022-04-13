import React, { useState } from "react";
import TitleSection from "../../atom/TitleSection";
import FsLightbox from "fslightbox-react";
import { BsFillImageFill, BsGlobe, BsGithub } from "react-icons/bs";
const Project = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="bg-neutral-100 py-12 px-5 my-20">
      <TitleSection title="Projects" />
      <div className=" flex justify-center gap-y-3 flex-wrap">
        <div className="w-[600px] drop-shadow-2xl rounded overflow-hidden relative">
          <img
            src="/img/staycation-header.png"
            className="w-full object-cover"
            alt=""
          />
          <div className="bg-black/80 backdrop-blur-md absolute w-full h-full top-0 left-0 overflow-hidden opacity-0 hover:opacity-100 transition ease-in-out duration-300 flex flex-col p-4">
            <div className="flex-1 text-white md:text-3xl text-lg text-center  flex flex-col justify-center items-center font-inter gap-2">
              <p className="font-semibold ">Staycation.</p>
              <div className="flex gap-3">
                <p className="">Bootstrap</p>
                <p className="">NEXT.js</p>
                <p className="">Redux</p>
              </div>
            </div>
            <div className="flex justify-center gap-12 items-center flex-1 text-white lg:text-5xl text-4xl ">
              <div className="">
                <BsFillImageFill
                  className=" cursor-pointer"
                  onClick={() => setToggler(!toggler)}
                />
              </div>
              <div className="">
                <a
                  href="https://staycation-seven.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe className=" cursor-pointer" />
                </a>
              </div>
              <div className="">
                <a
                  href="https://github.com/regirianto/staycation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className=" cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/img/staycation-header.png",
          "/img/staycation-mostpicked.png",
          "/img/staycation-detail.png",
          "/img/staycation-full.png",
          "/img/staycation-booking-information.png",
        ]}
      />
    </div>
  );
};

export default Project;
