import React from "react";
const CardFeature = ({ icon, title, desc }) => {
  return (
    <div className="p-3 text-center">
      <div className="text-7xl text-center flex justify-center text-primary">
        {icon}
      </div>
      <p className="text-2xl my-2 font-semibold">{title}</p>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

export default CardFeature;
