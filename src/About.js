import React, { useContext, useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Mycontext } from "./Store/MyContext";
import TextLoop from "react-text-loop";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const About = () => {
  const { mode, setMode } = useContext(Mycontext);
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80,
  });

  const [isVisible, setIsVisible] = useState(false); // State to control text visibility

  useEffect(() => {
    setIsVisible(true); // Set text visible initially
  }, []); // Empty dependency array to run only once on component mount

  const fade = useSpring({
    opacity: isVisible ? 1 : 0, // Animate opacity based on `isVisible`
    from: { opacity: 0 }, // Initial opacity (invisible)
    to: { opacity: 1 }, // Target opacity (fully visible)
    config: { duration: 1500 }, // Animation duration (1.5 seconds)
  });

  return (
    <>
      <div
        id="HomeScroll"
        className={mode === true ? "Div-Container1" : "Div-Container2"}
      >
        <animated.div style={fade} className="Fade-div">
          {" "}
          {/* Apply animation to the entire text container */}
          <div className="Div-Container">
            <div className="Left-div">
              <h1>
                <div className={mode === true ? "hi" : "hi1"}>
                  Hi, I am Paras Naulia
                </div>
              </h1>
              <div className="sapn">
                {text} <Cursor />
              </div>
              <div>
                <p className={mode === true ? "Para1" : "Para2"}>
                  Highly motivated CS student passionate about pushing web
                  development boundaries. Skilled in MERN stack (10+ real-world
                  projects). Leverage AI to create intelligent applications.
                  Strong DSA foundation (500+ C++ challenges) for translating
                  complex algorithms into user-enhancing AI solutions. Excellent
                  communication and teamwork skills honed through collaborative
                  projects.
                </p>
              </div>
            </div>
            <div className="Right-Div">
              <img src="/Img/pp3.png" alt="" className="About-Img" />
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default About;
