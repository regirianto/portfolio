import React from "react";

const LinkItem = ({ title }) => {
  return (
    <div className="">
      <p className="md:text-xl text-2xl cursor-pointer hover:text-primary hover:font-semibold">
        {title}
      </p>
    </div>
  );
};

export default LinkItem;
