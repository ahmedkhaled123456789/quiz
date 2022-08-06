import React,{useState} from "react";
  import './Question.css';
import Card from './Card'

  const QuestionThree =({setQuestionIndex,setParagraph, score,setScore,setQuestionPage,setShowFinalPage,questions,questionIndex}) => {
    const [show,setShow]=useState(false)

   const handleClick=(isCorrect) =>{
    if(questionIndex < 9){

      if(isCorrect){
        setScore((score) => score += 10);
        
      }
      setQuestionIndex((prevIndex ) => prevIndex + 1) 
     
  }else{
    if(isCorrect){
      setScore((score) => score += 10);
      
      
    }
    setShow(true)

    // setQuestionPage(false);
    // setShowFinalPage(true);
  }
      
    
       }

 
  const handleShow=() => {
    setQuestionPage(false);
      setShowFinalPage(true);
      if(score === 100){
        setParagraph(true);

      }
  }
  return (
    <Card>
<h1 className="question"> {questions[questionIndex].questionText} </h1>
<div className="answers">
  {questions[questionIndex].answers.map((answer,index) =>(
    <>
    
    
    <div
     className="answer"
    key={index}
      onClick={() => handleClick(answer.correctAnswer)}
     >
      <p  >{answer.answerText}</p></div>
    
     
     {show && <p className="show" onClick={() => handleShow()}>Result</p>}

   
    </>
   

      
  ))}
 
</div>
<p className="score">
   Top Score: <span>{score}</span>
    </p>
    
    <p className="question_number">
      question <span>{questionIndex +1}</span>/ 10
    </p>
    
    </Card>
  )
  
 }

export default QuestionThree