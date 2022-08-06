import React from "react";
import { useState } from "react";
import {questions, questionsTwo, questionsThree} from '../questions';
import Question from "./Question";
 import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
 import './QuestionsPage.css';

const QuestionsPage =( {questionOne,setParagraph,questionTow,questionThree, score,setScore,setQuestionPage,setShowFinalPage}) => {
  const [questionIndex, setQuestionIndex]=useState(0)

  return <>
  {questionOne &&
   <Question 
   setParagraph={setParagraph}
    questions={questions}
   setQuestionIndex={setQuestionIndex}
   questionIndex={questionIndex}
   score={score} 
   setScore={setScore}
    setQuestionPage={setQuestionPage}
    setShowFinalPage={setShowFinalPage}
    />
  }

{questionTow &&
   <QuestionTwo 
   setParagraph={setParagraph}
 
    questions={questionsTwo}
   setQuestionIndex={setQuestionIndex}
   questionIndex={questionIndex}
   score={score} 
   setScore={setScore}
    setQuestionPage={setQuestionPage}
    setShowFinalPage={setShowFinalPage}
    />
  }

{questionThree &&
   <QuestionThree
   setParagraph={setParagraph}
 
    questions={questionsThree}
   setQuestionIndex={setQuestionIndex}
   questionIndex={questionIndex}
   score={score} 
   setScore={setScore}
    setQuestionPage={setQuestionPage}
    setShowFinalPage={setShowFinalPage}
    />
  }
  
  </>;
}

export default QuestionsPage;