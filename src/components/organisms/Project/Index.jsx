import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import React, { useState } from "react";
import { BsFillImageFill, BsGithub, BsGlobe } from "react-icons/bs";
import TitleSection from "../../atom/TitleSection";
const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 4,
      name: "R-Movies",
      tech: ["ReactJS", "Tailwindcss", "TMDB-API", "Redux"],
      img: [
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252866/portfolio/movies-2_a2hhj4.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252851/portfolio/movies-1_pdshrb.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252870/portfolio/movies-3_f7nglm.png",
      ],
      repo: "https://github.com/regirianto/R-movies",
      website: "https://r-movies-lovat.vercel.app",
      desc: "R-Movies is a website using tmdb api for search movies",
    },
    {
      id: 1,
      name: "Staycation.",
      tech: ["Bootstrap", "Next.js", "Redux"],
      img: [
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252867/portfolio/staycation-full_llcqcf.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252856/portfolio/staycation-header_fpq6qi.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252857/portfolio/staycation-detail_lw4ssd.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252854/portfolio/staycation-booking-information_mhxp8t.png",
      ],
      repo: "https://github.com/regirianto/staycation",
      website: "https://staycation-seven.vercel.app",
      desc: "Staycation is a platform to book hotels",
    },
    {
      id: 3,
      name: "Staycation Server",
      tech: ["NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
      img: [
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252857/portfolio/Staycation-server-3_qap91k.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252862/portfolio/Staycation-server-4_mwkmgi.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252858/portfolio/Staycation-server-5_afb1jb.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252855/portfolio/Staycation-server_m2hrka.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252857/portfolio/Staycation-server-2_jklyuc.png",
      ],
      repo: "https://github.com/regirianto/staycation-server",
      website: "https://staycation-server-app.herokuapp.com",
      desc: "Staycation-server is a content mangement system for stacycation website for booking hotels",
    },
    {
      id: 2,
      name: "The Malaka.",
      tech: ["Tailwind", "ReactJS"],
      img: [
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650253203/portfolio/the-malaka-header_1_ryzhld.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252865/portfolio/the-malaka-full_kizwve.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252859/portfolio/the-malaka-3_udbgoe.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252859/portfolio/the-malaka-4_spiha3.png",
        "https://res.cloudinary.com/dg3vgxclp/image/upload/v1650252861/portfolio/the-malaka-5_ovtixn.png",
      ],
      repo: "https://github.com/regirianto/the-malaka",
      website: "https://the-malaka-regirianto.vercel.app",
      desc: "The Malaka is a landing page for a book to learn tailwind css",
    },
  ]);

  return (
    <div className="bg-neutral-100 py-12 px-5 my-20">
      <TitleSection title="Projects" />
      <div className=" flex justify-center gap-5 flex-wrap">
        {projects.map((project) => (
          <div
            className="max-w-[600px] max-h-[300px]  shadow-2xl drop-shadow-xl rounded overflow-hidden relative"
            key={project.id}
          >
            <img src={project.img[0]} className="w-full" alt="" />
            <div className="bg-black/80 backdrop-blur-md absolute w-full h-full top-0 left-0 overflow-hidden opacity-0 hover:opacity-100 transition ease-in-out duration-300 flex flex-col gap-1 p-3 select-none">
              <div className="flex-1 text-white md:text-3xl text-lg text-center flex flex-col justify-center items-center font-inter gap-1">
                <p className="font-semibold ">{project.name}</p>
                <p className="text-base">{project.desc}</p>
                <div className="flex gap-3 text-base">
                  {project.tech.map((tec, i) => (
                    <p className="text-purple-500" key={i}>
                      {tec}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-x-12 items-center flex-1 text-white lg:text-5xl text-4xl ">
                <div className="relative overflow-hidden">
                  <BsFillImageFill className="hover:opacity-75 cursor-pointer " />
                  <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    className="absolute top-0"
                  >
                    {project.img.map((img) => (
                      <a href={img} className="absolute bottom-0 left-0">
                        <img src={img} alt="" className="opacity-0 w-10" />
                      </a>
                    ))}
                  </LightGallery>
                </div>
                <div className="">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGlobe className="hover:opacity-75 cursor-pointer" />
                  </a>
                </div>
                <div className="">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="hover:opacity-75 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
