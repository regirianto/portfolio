import React from "react";
import CardFeature from "./CardFeature";
import { MdSpeed, MdDevices } from "react-icons/md";
import { BsGem } from "react-icons/bs";
const Feature = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 mt-10 ">
      <CardFeature
        icon={<MdSpeed />}
        title="Fast"
        desc="Fast load times and lag free interaction, my highest priority"
      />
      <CardFeature
        icon={<MdDevices />}
        title="Responsive"
        desc="My layouts will work on any device, big or small"
      />
      <CardFeature
        icon={<BsGem />}
        title="Best Result"
        desc="I will give you the best application for your best ideas"
      />
    </div>
  );
};

export default Feature;
