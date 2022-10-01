import React, { useState } from "react";
const Question = ({ question }) => {
  const [PIsActive, setPIsActive] = useState(false);
  return (
    <div className={`box ${PIsActive ? "active" : ""}`}>
      <div className="box_question">
        <div className="q">{question.title}</div>
        <span onClick={() => setPIsActive(!PIsActive)}>
          {PIsActive ? "-" : "+"}
        </span>
      </div>
      <p>{question.info}</p>
    </div>
  );
};

export default Question;
