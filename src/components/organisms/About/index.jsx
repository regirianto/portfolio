import React from "react";
import TitleSection from "../../atom/TitleSection";
import Feature from "./Feature";
import Skill from "./Skill";

const About = () => {
  return (
    <div className="my-20">
      <TitleSection title="about" />
      <Feature />
      <Skill />
    </div>
  );
};

export default About;
