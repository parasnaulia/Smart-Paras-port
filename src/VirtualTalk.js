import { useContext } from "react";
import Nav from "./Nav";
import { Mycontext } from "./Store/MyContext";
import { ImCross } from "react-icons/im";

const VirtualTalk = () => {
  const { mode, virtual, setVirtual } = useContext(Mycontext);
  console.log(mode);
  return (
    <>
      <div className="VirtualTalk">
        <div className="cross">
          <ImCross
            onClick={() => {
              setVirtual(false);
            }}
          />
        </div>
        <div className="talk">
          <h2>You Can Talk To Me Virtually </h2>
          <h3>You Can Me Question Like</h3>
          <div>1.What is Your Name</div>
          <div>2.Give Your Introduction or Introduce YourSelf</div>
          <div>3.Tell Me Your Strength</div>
          <div>4.Tell Me Your Weakness</div>
          <div>5.What are Your Skills</div>
          <div>6.What are Your Educatiobal qualification</div>
          <div>7. What are Your Survices</div>
          <div>8. Navigate or Go To Project Section</div>
          <div>9. Navigate or Go To About us Section</div>
          <div>10. Navigate or Go To Survices/Home Section</div>
          <div>11. Open Project [ProjectName]</div>
          <div>
            12.Tell me about your [ProjectName] (For Example- AI-Powered Voice
            Assistant Project )
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default VirtualTalk;
