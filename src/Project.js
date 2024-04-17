import React, { useContext } from "react";
import { Mycontext } from "./Store/MyContext";

const Project = () => {
  const { mode } = useContext(Mycontext);
  return (
    <div id="ProjectSCroll" className={mode === true ? "Project1" : "Project2"}>
      <div className="Project-div">
        <div>
          <h1 className="Project-h1">My Skills</h1>
        </div>
        <div className="Progress">
          <div className="Progress-inner">75% HTMl</div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner">75% Css</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner1">85% JavaScript</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner1">85% Reactjs</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner2">80% NodeJs</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner2">80% ExpressJs</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner2">80% MongODB</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner2">80% MySqL</div>
          </div>
        </div>
        <div>
          <div className="Progress">
            <div className="Progress-inner1">85% DSA</div>
          </div>
        </div>
        <div className="Progress">
          <div className="Progress-inner2">80% C++</div>
        </div>
        <div className="Progress">
          <div className="Progress-inner2">80% Redux</div>
        </div>
        <div className="Progress">
          <div className="Progress-inner2">80% RestFulApi</div>
        </div>
      </div>
      <div className="Project-div1">
        <div>
          <h1 className="Project-h1">My Projects</h1>
        </div>
        <div className="alan">
          <div>
            <h1 className="alan">
              Voice-Controlled News Application Developer
            </h1>
            <p className={mode == true ? "d" : "w"}>
              Developed a cutting-edge news application utilizing React.js,
              Material UI, Redux, and integrating ALNA AI voice assistance
              technology. Empowered users to navigate through news articles
              hands-free by providing voice commands, enhancing accessibility
              and user experience.
            </p>
            <p>
              <a
                className={mode ? "d1" : "w1"}
                href="https://parasnaulia.github.io/Voice-Assistant-News-Project-/"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan"> AI ImageGeneration App</h1>
            <p>
              Designed and deployed a Full Stack MERN AI Image Generation
              App,capable of generating unique and creative images using
              advanced AI algorithms, demonstrating proficiency in AI
              integration and full-stack. Used
              React,Nodejs,ExpressJs,mongoDB,Open AI
            </p>
            <p>
              <a
                className={mode ? "d1" : "w1"}
                href="https://github.com/parasnaulia/Image_gerneration"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">Image Encryption and Decryption</h1>
            <p>
              In This Project we make
              aGUI-basedwindowwherewecanDevelopedaGUI-basedImageEncryptionand
              Decryption application utilizing symmetric key encryption
              techniques, ensuring secure data protection for images, text, pdf
              and videos. Used Core Java,Cryptography .
            </p>
            <p>
              {" "}
              <a
                className={mode ? "d1" : "w1"}
                href="https://github.com/parasnaulia/Pdf_image_file_encryption-_decryption"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">YouTube Clone Developer</h1>
            <p>
              Spearheaded the creation of a dynamic YouTube clone utilizing
              React.js, Redux, and incorporating the YouTube API to replicate
              all functionalities of the original platform. Implemented advanced
              features such as debouncing for enhanced search functionality,
              ensuring seamless user experience.
            </p>

            <p>
              {" "}
              <a
                className={mode ? "d1" : "w1"}
                href=" https://paras-yout-u-be.web.app/"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">Food Ordering App Developer</h1>
            <p>
              Created a robust food ordering app with React.js and Redux,
              offering real-time order tracking, secure payments, and
              personalized recommendations. Seamlessly integrated essential
              features for a modern food delivery experience, enhancing user
              satisfaction.
            </p>
            <a
              className={mode ? "d1" : "w1"}
              href=" https://paras-yout-u-be.web.app/"
              target="_blank"
            >
              Link
            </a>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">
              Netflix Clone with AI-Powered Movie Suggestions
            </h1>
            <p>
              Developed a Netflix clone with GPT-powered search for
              keyword-based movie suggestions. Integrated attractive UI/UX,
              authentication (login/register), and utilized Node.js, Express.js,
              MongoDB, React, and Redux for seamless functionality.
            </p>
            <p>
              <a
                className={mode ? "d1" : "w1"}
                href=" https://paras-yout-u-be.web.app/"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">MERN E-commerce Website Developer</h1>
            <p>
              Created an MERN e-commerce platform with search, sort, and filter
              features, personalized recommendations, Stripe payment gateway,
              and authentication including login, register, and OTP-based forgot
              password.
            </p>
            <p>
              {" "}
              <a
                className={mode ? "d1" : "w1"}
                href=" https://paras-yout-u-be.web.app/"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">Decentralized Social Media App Developer</h1>
            <p>
              Developed a decentralized social media platform using MERN stack
              and Solidity, featuring real-time chat functionality powered by
              web sockets.
            </p>

            <p>
              {" "}
              <a
                className={mode ? "d1" : "w1"}
                href="https://github.com/parasnaulia/decentralized-twitter-clone"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="alan">Portfolio with AI-Powered Voice Assistant</h1>
            <p>
              Crafted a React and Redux portfolio website featuring an
              integrated AI-powered voice assistant using ALAN AI. Users can
              interact with the portfolio by asking questions, and the virtual
              assistant provides responses, enhancing user engagement and
              accessibility.
            </p>
            <p>
              {" "}
              <a
                className={mode ? "d1" : "w1"}
                href="https://github.com/parasnaulia/decentralized-twitter-clone"
                target="_blank"
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="Project-div3">
        <div>
          <h1 className="Project-h1">My Strength</h1>
        </div>
        <div>
          <h1 className="alan1">Full-Stack Development</h1>
        </div>
        <div>
          <h1 className="alan1">AI Integration</h1>
        </div>
        <div>
          <h1 className="alan1">DSA Problem Solver</h1>
        </div>
        <div>
          <h1 className="alan1">10+ MERN Projects</h1>
        </div>
        <div>
          <h1 className="alan1">Adaptable & Versatile:</h1>
        </div>
        <div>
          <h1 className="alan1">Continual Learning</h1>
        </div>
        <div>
          <h1 className="alan1">Strong Communication </h1>
        </div>
        <div>
          <h1 className="alan1">Eager Learner:</h1>
        </div>
        <div>
          <h1 className="alan1">Team Player</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
