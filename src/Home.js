import React, { useContext } from "react";
import Nav from "./Nav";
import About from "./About";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import VirtualTalk from "./VirtualTalk";
import { Mycontext } from "./Store/MyContext";

const Home = () => {
  const { virtual, setVirtual } = useContext(Mycontext);
  return (
    <>
      <Nav />
      {virtual && <VirtualTalk />}
      <About />
      <AboutMe />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
