import React from 'react';
import {useContext} from 'React';
import {QuizContext} from "../context/quiz";

import './Option.css'

const Option =({option, selectOption, answer}) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option;