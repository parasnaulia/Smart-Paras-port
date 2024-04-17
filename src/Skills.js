import React, { useContext } from "react";
import { Mycontext } from "./Store/MyContext";

const Skills = ({ obj }) => {
  const { mode } = useContext(Mycontext);
  console.log(obj.items);
  return (
    <div>
      {obj.items.map((item) => {
        return (
          <div className={mode === true ? "skills1" : "skills2"}>
            <h1 className="h1">{item.heading}</h1>
            <span className={mode ? "data1" : "data2"}>{item.data}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
