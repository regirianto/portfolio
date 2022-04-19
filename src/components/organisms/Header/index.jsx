import React, { useRef } from "react";
import Navbar from "../Navbar";
import Typewriter from "typewriter-effect";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = ({ to }) => {
  const homeRef = useRef(null);
  return (
    <div
      className=" h-screen w-full "
      style={{ backgroundImage: "url(/img/Meteor.svg)" }}
      ref={homeRef}
    >
      <Navbar to={to} homeRef={homeRef} />
      <div className="text-white flex items-center flex-col justify-center gap-6  w-full h-full">
        <div className="text-center md:text-5xl text-3xl px-2">
          <div className="tracking-wide flex justify-center items-center">
            <p>Hello,I'm&nbsp;</p>
            <div className="font-bold drop-shadow-2xl">
              {
                <Typewriter
                  options={{
                    strings: ["Regi Rianto"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            </div>
          </div>
          <p>I'm a full-stack web developer</p>
        </div>
        <div className="">
          <button
            className="px-6 py-3 md:text-xl text-lg border border-white hover:bg-teal-400 hover:border-transparent outline-none flex items-center gap-2 font-bold  transition ease-in group"
            onClick={() =>
              window.scrollTo({
                behavior: "smooth",
                top: to.aboutRef.current.offsetTop,
              })
            }
          >
            View My Work{" "}
            <AiOutlineArrowRight className="group-hover:rotate-90 transition ease-in-out duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
