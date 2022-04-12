import React from "react";
import LinkItem from "./LinkItem";

const MobileNav = ({ show, mobileNavRef }) => {
  return (
    <div
      className={`md:hidden  ${
        show ? "left-0" : "-left-full"
      } absolute top-0  mobile bg-transparent/90 w-3/4 min-h-screen text-white flex flex-col justify-center gap-y-14 items-center  font-semibold transition-all duration-300 z-10 `}
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
