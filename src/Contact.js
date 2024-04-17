import { useContext, useRef, useState } from "react";
import { Mycontext } from "./Store/MyContext";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { TiTickOutline } from "react-icons/ti";
import { validate } from "email-validator";
const Contact = () => {
  function cvDownload() {
    const url = "Img/Paras_Resume (14).pdf";
    window.location.href = url;
  }
  const form = useRef();
  const { mode } = useContext(Mycontext);
  const [text, setText] = useState("");
  const [email1, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xk95pse", "template_329sdsr", form.current, {
        publicKey: "YPhlWU5mBLF46gdT9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  function Green() {
    setText("Thank You Sir/Ma'am For Your Time I get Back You Soon ");
    setEmail("");
    setMsg("");
    setName("");
  }
  const handleFormSubmit = (e) => {
    if (validate(email1)) {
      sendEmail(e);
      Green();
    } else {
      setText("Email Is Not valid Try To use Proper Email ");
    }
  };
  return (
    <div
      id="ContactScroll"
      className={mode ? "Contact-Container1" : "Contact-Container2"}
    >
      <div className="Contact-left">
        <h1 className="contacth11">Contact Us</h1>
        <div>
          <SiGmail /> <span className="Email"> ParasNaulia645@gmail.com</span>
        </div>
        <div>
          <FaPhoneAlt />
          <span className="Email">9997272448</span>
        </div>
        <div>
          <span>
            <FaFacebook className="logos" />
          </span>
          <span>
            <FaInstagram className="logos" />
          </span>
          <span>
            <CiLinkedin className="logos" />
          </span>
          <span>
            <SiLeetcode className="logos" />
          </span>
          <span>
            <SiGeeksforgeeks className="logos" />
          </span>
          <span>
            <SiCodingninjas className="logos" />
          </span>
          <span>
            <FaGithub className="logos" />
          </span>
        </div>
        <div>
          <button
            className={mode ? "logobtn1" : "logobtn2"}
            onClick={cvDownload}
          >
            {" "}
            Download Cv
          </button>
        </div>
      </div>
      <div className="Contact-Right">
        <form
          className="form"
          ref={form}
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <div>
            <input
              placeholder="Name"
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={mode ? "Input-Name1" : "Input-Name2"}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              name="user_email"
              value={email1}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={mode ? "Input-Name1" : "Input-Name2"}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="message"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              className={mode ? "Message1" : "Message2"}
            />
          </div>
          <div>
            <h2 className="Send">
              {text && <TiTickOutline className="Send" />}
              {text}
            </h2>
          </div>
          <div>
            <input
              type="submit"
              value="Send"
              className={mode ? "logobtn3" : "logobtn4"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;

// <form>
// <div>
//   <input
//     placeholder="Name"
//     className={mode ? "Input-Name1" : "Input-Name2"}
//   />
// </div>
// <div>
//   <input
//     placeholder="Email"
//     className={mode ? "Input-Name1" : "Input-Name2"}
//   />
// </div>

// setText("Thank You Sir/Ma'am For Your Time I get Back You Soon ");
// <div>
//   <input
//     placeholder="Message"
//     className={mode ? "Message1" : "Message2"}
//   />
// </div>
// </form>
