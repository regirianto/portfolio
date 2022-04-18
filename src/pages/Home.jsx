import React, { useEffect, useRef } from "react";
import About from "../components/organisms/About";
import Certificate from "../components/organisms/Certificate/Index";
import Contact from "../components/organisms/Contact/Index";
import Header from "../components/organisms/Header";
import Project from "../components/organisms/Project/Index";

const Home = () => {
  const aboutRef = useRef();
  const projectRef = useRef();
  const certificateRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      <Header to={{ aboutRef, projectRef, certificateRef, contactRef }} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Certificate />
      <Contact />
    </div>
  );
};

export default Home;
