import React from "react";
import LinkItem from "./LinkItem";

const MobileNav = ({ show }) => {
  return (
    <div
      className={`md:hidden  ${
        show ? "right-0 " : "-right-full"
      } right-0 absolute top-0  bg-transparent/90 w-full h-full text-white flex flex-col justify-center gap-y-14 items-center  font-semibold transition-all duration-300 z-10 `}
    >
      <LinkItem title={"Home"} />
      <LinkItem title={"About"} />
      <LinkItem title={"Skill"} />
      <LinkItem title={"Project"} />
      <LinkItem title={"Contact"} />
    </div>
  );
};

export default MobileNav;
