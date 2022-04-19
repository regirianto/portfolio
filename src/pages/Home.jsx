import React, { useEffect, useRef } from "react";
import About from "../components/organisms/About";
import Certificate from "../components/organisms/Certificate/Index";
import Contact from "../components/organisms/Contact/Index";
import Footer from "../components/organisms/Footer/Index";
import Header from "../components/organisms/Header";
import Project from "../components/organisms/Project/Index";

const Home = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const certificateRef = useRef(null);
  const contactRef = useRef();

  return (
    <div>
      <Header to={{ aboutRef, projectRef, certificateRef, contactRef }} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Certificate />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Home;
