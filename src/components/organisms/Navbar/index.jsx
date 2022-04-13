import React, { useEffect, useRef, useState } from "react";
import LinkItem from "./LinkItem";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      return disableBodyScroll(document.body);
    }
    clearAllBodyScrollLocks();
  }, [show]);

  useEffect(() => {
    document.body.addEventListener("click", clickOutSide);

    return () => document.removeEventListener("click", clickOutSide);
  }, [show]);

  const clickOutSide = (e) => {
    if (show && !e.target.classList.contains("mobile")) {
      e.preventDefault();
      setShow(false);
    }
  };

  return (
    <div className="text-white">
      <div className="container mx-auto py-4 flex justify-between items-center px-5 z-40">
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
        <div className="md:hidden absolute right-10 z-20  mobile">
          {!show ? (
            <GoThreeBars
              className="cursor-pointer text-5xl font-bold mobile block"
              onClick={() => setShow((prevState) => true)}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-5xl font-bold mobile block"
              onClick={() => setShow((prevState) => false)}
            />
          )}
        </div>
      </div>
      <MobileNav show={show} />
    </div>
  );
};

export default Navbar;
