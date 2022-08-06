 import React from "react";
 import Card from "./Card";
 import './StartingPage.css'
const StartingPage =( {setShowSelectPage,setShowSTartindPage,setQuestionPage,userName,setUserName,}) => {
  const startGame= () =>{
    if(userName.trim().length > 0){
      setShowSTartindPage(false);
      // setQuestionPage(true)
      setShowSelectPage(true)
    }
  }
  const handleChange= (e) =>{
    setUserName(e.target.value)
   }
  return (
    <Card>
    <h1 className="header">Welcome To Quiz !</h1>
    <h3 className="primay_text">Please Inter Your UserName.</h3>
    <input type="text" 
    className="username_input" 
    placeholder="username"
     value={userName}
     onChange={(e) => handleChange(e)}
     />
    <button className="start_btn" onClick={startGame}>Let's start</button>
    {/* <p className="top_score">
   Top Score: <span>{topScore} </span>
    </p> */}
  </Card>
  );
 
   
}

export default StartingPage;