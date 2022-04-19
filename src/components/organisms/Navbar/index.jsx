import React, { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
const Navbar = ({ to, homeRef }) => {
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
          <p className="text-3xl font-semibold border-2 border-white/80 p-2 drop-shadow-xl cursor-pointer select-none">
            RR
          </p>
        </div>
        <div className="md:flex hidden gap-x-3">
          <LinkItem title={"Home"} to={homeRef} />
          <LinkItem title={"About"} to={to.aboutRef} />
          <LinkItem title={"Project"} to={to.projectRef} />
          <LinkItem title={"Contact"} to={to.contactRef} />
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
      <MobileNav show={show} to={to} />
    </div>
  );
};

export default Navbar;
