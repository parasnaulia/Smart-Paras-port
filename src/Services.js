import React, { useContext } from "react";
import { Mycontext } from "./Store/MyContext";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";
const Services = () => {
  const { mode } = useContext(Mycontext);
  return (
    <div id="ServiceSCroll" className="Services_Container">
      <div>
        <h1 className={mode === true ? "h1-survice1" : "h1-survice2"}>
          My Services{" "}
        </h1>
      </div>
      <div className="Services_Container1">
        <div className={mode === true ? "service-1" : "service-2"}>
          <div>
            <CgWebsite />
          </div>
          <div>
            <h2 className="heading">FrontEnd</h2>
          </div>
          <div>
            <p className="paragraph">
              I bring user interfaces to life! Leveraging React.js,Redux and
              other cutting-edge technologies, I craft interactive and visually
              stunning experiences that captivate your audience.
            </p>
          </div>
        </div>
        <div className={mode === true ? "service-1" : "service-2"}>
          <div>
            <FaServer />
          </div>
          <div>
            <h2 className="heading"> Backend</h2>
          </div>
          <div>
            <p className="paragraph">
              The engine behind the magic! I specialize in building robust and
              scalable backend applications using Node.js. My expertise ensures
              a smooth and efficient foundation for your web project.
            </p>
          </div>
        </div>
        <div className={mode === true ? "service-1" : "service-2"}>
          {" "}
          <div>
            <IoServerSharp />
          </div>
          <div>
            <h2 className="heading">Fullstack</h2>
          </div>
          <div>
            <p className="paragraph">
              I wear all the hats! Harnessing the full power of the MERN stack,
              I create comprehensive web applications, handling both frontend
              and backend functionalities. Let me streamline your development
              process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;



































