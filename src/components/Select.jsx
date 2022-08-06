import React from "react";
  import './Select.css';
   
const Select =( {setShowSelectPage, setShowSTartindPage,setQuestionPage,setQuestionOne,setQuestionTwo,setQuestionThree}) => {
     

const optionOne=(e) =>{
  setQuestionOne(true)
  setQuestionTwo(false)
  setQuestionThree(false)
  e.target.classList.add('active')
  }
    
 
const optionTwo=(e) =>{
  setQuestionTwo(true)

  setQuestionOne(false)
   setQuestionThree(false)
   e.target.classList.add('active')


}   
  
const optionThree=(e) =>{
  setQuestionThree(true)
   setQuestionTwo(false)
  setQuestionOne(false)

  e.target.classList.add('active')

}  
     
     
const startGame= () =>{
      setShowSelectPage(false)
      setQuestionPage(true)
 }

    
    return (
      <>
      <div className="cards">
      <h1 className="header">Select Your Exam !</h1>
       <div className="btns">
        <button className="btn"
         onClick={(e) => optionOne(e)}
         >Present Semple</button>
        <button className="btn" 
        onClick={(e) => optionTwo(e)}
        > Past Semple</button>
        <button className="btn"  
        onClick={(e) => optionThree(e)}
        >Future Semple</button>
       </div>
       <button className="start_btn" onClick={() => startGame()}>Let's start</button>

      </div>
   
      </>
       
    
    );
   
     
  }
  
  export default Select;