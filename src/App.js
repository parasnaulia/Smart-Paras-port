import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import About from "./About";
import { Mycontext } from "./Store/MyContext";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import alanBtn from "@alan-ai/alan-sdk-web";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import VirtualTalk from "./VirtualTalk";

const App = () => {
  const ScrollAboutMe = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const NavigateBhai = (Link) => {
    // window.open(Link, "_blank");
    window.location.href = Link;
  };
  const [mode, setMode] = useState(false);
  const [virtual, setVirtual] = useState(false);

  useEffect(() => {
    alanBtn({
      key: "672f5547c60a989b49cee26a9a3e546d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      // bottom: "200px",
      right: "80px",
      zIndex: 10,
      onCommand: (commandData) => {
        if (commandData.command === "open") {
          ScrollAboutMe("ProjectSCroll");
          // alert("Fuck Me");
          // Call the client code that will react to the received command
        } else if (commandData.command === "Home") {
          ScrollAboutMe("HomeScroll");
        } else if (commandData.command === "Service") {
          ScrollAboutMe("ServiceSCroll");
        } else if (commandData.command === "Contact") {
          ScrollAboutMe("ContactScroll");
        } else if (commandData.command === "AboutMe") {
          ScrollAboutMe("AboutMeScroll");
        } else if (commandData.command === "Link_Alan") {
          NavigateBhai(
            "https://parasnaulia.github.io/Voice-Assistant-News-Project-/"
          );
        } else if (commandData.command === "Link_Youtube") {
          NavigateBhai("https://paras-yout-u-be.web.app/");
        } else if (commandData.command === "Link_Netflix") {
          NavigateBhai("https://netflix-best-nyoo.vercel.app/");
        } else if (commandData.command === "Link_Ecomm") {
          NavigateBhai("https://ecommerce-front-end-two-gamma.vercel.app/");
        } else if (commandData.command === "Link_AIIamge") {
          NavigateBhai("https://github.com/parasnaulia/Image_gerneration");
        } else if (commandData.command === "Link_Block") {
          NavigateBhai(
            "https://github.com/parasnaulia/decentralized-twitter-clone"
          );
        } else if (commandData.command === "Link_Port") {
          NavigateBhai("https://github.com/parasnaulia/Mera-Paras-Port1");
        } else if (commandData.command === "Link_Crypto") {
          NavigateBhai(
            "https://github.com/parasnaulia/Pdf_image_file_encryption-_decryption"
          );
        } else if (commandData.command === "Link_Food") {
          NavigateBhai("https://github.com/parasnaulia/Food-Ordering-App");
        }

        //   window.open(linkUrl, '_blank');
      },
    });
  }, []);
  return (
    <div className={mode === true ? "Container1" : "Container2"}>
      <Mycontext.Provider value={{ mode, setMode, virtual, setVirtual }}>
        <div className={mode === true ? "Darkk" : "Whitee"}>
          <Home />
        </div>
      </Mycontext.Provider>
    </div>
  );
};

export default App;
