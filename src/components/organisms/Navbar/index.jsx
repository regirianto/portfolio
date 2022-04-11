import React, { useState } from "react";
import LinkItem from "./LinkItem";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className=" text-white ">
      <div className="container mx-auto py-4 flex justify-between items-center px-5 ">
        <div className="">
          <p className="text-4xl font-semibold text-primary">Logo</p>
        </div>
        <div className="md:flex hidden gap-x-3">
          <LinkItem title={"Home"} />
          <LinkItem title={"About"} />
          <LinkItem title={"Skill"} />
          <LinkItem title={"Project"} />
          <LinkItem title={"Contact"} />
        </div>
        <div className="md:hidden block absolute right-10 z-20">
          {!show ? (
            <GoThreeBars
              className="cursor-pointer text-4xl font-bold"
              onClick={() => setShow((prevState) => !prevState)}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-4xl font-bold"
              onClick={() => setShow((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
      <MobileNav show={show} />
    </div>
  );
};

export default Navbar;
