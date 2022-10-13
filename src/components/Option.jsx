import React from 'react';
import {useContext} from 'React';
import {QuizContext} from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;