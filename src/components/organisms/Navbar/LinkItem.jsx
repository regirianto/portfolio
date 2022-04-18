import React, { useEffect } from "react";

const LinkItem = ({ title, to }) => {
  return (
    <div
      className=""
      onClick={() =>
        window.scrollTo({ top: to.current.offsetTop, behavior: "smooth" })
      }
    >
      <p className="md:text-xl text-2xl cursor-pointer hover:text-primary hover:font-semibold">
        {title}
      </p>
    </div>
  );
};

export default LinkItem;
