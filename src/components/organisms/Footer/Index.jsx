import React from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-secondary text-white py-10 text-center relative ">
      <div className="flex justify-center gap-3 items-center">
        <div
          className="absolute left-0 right-0 -top-5 max-w-max m-auto p-1 rounded-full text-center   bg-primary text-4xl font-bold cursor-pointer hover:bg-primary/90 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineArrowUp />
        </div>
        <a href="mailto:regirianto22@gmail.com" rel="noopener noreferrer block">
          <div className="text-2xl p-2 border border-white/30 rounded-full hover:bg-primary transition-colors font-semibold cursor-pointer ">
            <AiOutlineMail />
          </div>
        </a>
        <a
          href="https://wa.me/6287779291527"
          target="_blank"
          rel="noopener noreferrer block"
        >
          <div className="text-2xl p-2 border border-white/30 rounded-full hover:bg-primary transition-colors font-semibold cursor-pointer ">
            <AiOutlineWhatsApp />
          </div>
        </a>
        <a
          href="https://github.com/regirianto"
          target="_blank"
          rel="noopener noreferrer block"
        >
          <div className="text-2xl p-2 border border-white/30 rounded-full hover:bg-primary transition-colors font-semibold cursor-pointer ">
            <AiFillGithub />
          </div>
        </a>
      </div>
      <p className="mt-4 font-extralight text-opacity-20 uppercase">
        Regi Rianto{" "}
        <span className="text-primary/90"> ©{new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Footer;
