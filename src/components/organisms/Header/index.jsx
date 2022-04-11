import React from "react";
import Navbar from "../Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className=" h-screen w-full bg-no-repeat"
      style={{ backgroundImage: "url(/img/Meteor.svg)" }}
    >
      <Navbar />
      <div className="text-white flex items-center flex-col justify-center gap-6  w-full h-full">
        <div className="text-center md:text-5xl text-4xl px-2">
          <p className="tracking-widest">
            Hello,I'm&nbsp;
            <span className="text-primary font-semibold">Regi Rianto </span>
            <br /> I'm Full-stack web developer
          </p>
        </div>
        <div className="">
          <button className="px-6 py-3 md:text-xl text-lg border border-white hover:bg-primary hover:border-transparent outline-none flex items-center gap-2 font-semibold  transition ease-in">
            View My Work <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
