import React, { useContext, useState } from "react";
import { Mycontext } from "./Store/MyContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Nav = () => {
  const { mode, setMode, virtual, setVirtual } = useContext(Mycontext);
  const [show, setShow] = useState(false);

  // const ScrollAboutMe = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <div className={mode === true ? "Nav-Container1" : "Nav-Container2"}>
      <div className="ham">
        <GiHamburgerMenu
          className="hamIcon"
          onClick={() => {
            setShow(!show);
          }}
        />
        {show && (
          <div className="Ham-side">
            <div>
              <a href="#HomeScroll">Home</a>
            </div>

            <div>
              <a href="#AboutMeScroll">About us</a>
            </div>
            <div>
              <a href="#ServiceSCroll">My Survices</a>
            </div>

            <div>
              <a href="#ProjectSCroll">Project</a>
            </div>
            <div>
              <a href="#ContactScroll">Contact Me</a>
            </div>
            <div>
              <a
                href="#"
                onClick={() => {
                  // alert("Skjkln");
                  setVirtual(true);
                }}
              >
                Virtual Talk
              </a>
            </div>
          </div>
        )}
      </div>
      <div>
        <img src="/Img/Logo.png" alt="No Img" className="logo_img" />
      </div>
      <div>
        <div
          className={mode === true ? "Toggle-mode" : "Toggle-mode1"}
          onClick={() => {
            setMode(!mode);
          }}
        >
          <div className="inner-toggle-mode"></div>
        </div>
        <div> {mode === true ? "Dark " : "Light "}Mode</div>
      </div>
      <div className="Nav-Right">
        <div>
          <a href="#HomeScroll">Home</a>
        </div>

        <div>
          <a href="#AboutMeScroll">About us</a>
        </div>
        <div>
          <a href="#ServiceSCroll">My Survices</a>
        </div>

        <div>
          <a href="#ProjectSCroll">Project</a>
        </div>
        <div>
          <a href="#ContactScroll">Contact Me</a>
        </div>
        <div>
          <div
            className="virtual"
            onClick={() => {
              setVirtual(true);
            }}
          >
            {" "}
            Virtual Talk{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
