import React from "react";
import LinkItem from "./LinkItem";

const MobileNav = ({ show, to }) => {
  return (
    <div
      className={`md:hidden  ${
        show ? "left-0" : "-left-[200%]"
      } absolute top-0 backdrop-blur-xl mobile  w-screen min-h-screen text-white flex flex-col justify-center gap-y-14 items-center  font-semibold transition-all duration-300 z-10 `}
    >
      <LinkItem title={"Home"} />
      <LinkItem title={"About"} to={to.aboutRef} />
      <LinkItem title={"Skill"} />
      <LinkItem title={"Project"} to={to.projectRef} />
      <LinkItem title={"Contact"} />
    </div>
  );
};

export default MobileNav;
