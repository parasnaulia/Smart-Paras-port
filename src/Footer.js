import { useContext } from "react";
import { Mycontext } from "./Store/MyContext";

const Footer = () => {
  const { mode } = useContext(Mycontext);
  return (
    <div className={mode ? "footer1" : "footer2"}>
      <h3>Made By Paras @CopyWriteParas</h3>
    </div>
  );
};
export default Footer;
