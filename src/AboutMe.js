import { useContext, useState } from "react";
import { Mycontext } from "./Store/MyContext";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Obj } from "./Constants/Constants";
import Skills from "./Skills";

const AboutMe = () => {
  const { mode } = useContext(Mycontext);
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80,
  });
  // console.log("ekfje");
  const [tog, setTog] = useState(false);

  const Arr = ["Skills", "project", "Education"];
  const [index, setIndex] = useState(0);
  console.log(Obj[0]);
  console.log(Obj[1]);
  console.log(Obj[2]);
  return (
    <>
      {" "}
      <div id="AboutMeScroll">
        <h1 className={mode === true ? "AboutMe1" : "AboutMe2"}> About Me</h1>
      </div>
      <div className="AboutMeConatiner">
        <div></div>
        <div className="left-AboutMe">
          <img src="/Img/pp1.png" alt="No img" className="AboutMeimg" />
        </div>
        <div className="right-AboutMe">
          <h4>
            {" "}
            <div className={mode === true ? "paras2" : "paras1"}>
              I am Paras Naulia,
            </div>
            <div className="aboutmefull">
              {text} <Cursor />
            </div>
            <div className={mode === true ? "About-Skills1" : "About-Skills2"}>
              <div
                className="p1"
                onClick={() => {
                  setIndex(0);
                }}
              >
                Skills
                <br />
                {index === 0 && "........"}
              </div>
              <div
                className="p2"
                onClick={() => {
                  setIndex(1);
                }}
              >
                Project
                <br />
                {index === 1 && "......."}
              </div>

              <div
                className="p3"
                onClick={() => {
                  setIndex(2);
                }}
              >
                Education
                <br />
                {index === 2 && "........"}
              </div>
            </div>
            <div>{Obj[index] && <Skills obj={Obj[index]} />}</div>
          </h4>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
