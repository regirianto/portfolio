import React, { forwardRef, useEffect } from "react";
import TitleSection from "../../atom/TitleSection";
import Feature from "./Feature";
import Skill from "./Skill";

const About = forwardRef((props, ref) => {
  return (
    <div className="my-10 py-10" ref={ref}>
      <TitleSection title="about" />
      <Feature />
      <Skill />
    </div>
  );
});

export default About;
