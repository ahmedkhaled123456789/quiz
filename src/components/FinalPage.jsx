import React from "react";
import Card from './Card'
 import './FinalPage.css';
// ahmed
const FinalPage =( {score,paragraph,setScore, setShowFinalPage,topScore,setTopScore,setShowSTartindPage,userName,setUserName }) => {

  const handleClick=() =>{
    if(score > topScore){
      setScore(score);

    }
    setShowSTartindPage(true);
    setShowFinalPage(false);
    setScore(0);
    setUserName('');
  }
  return (
<Card>
    <h1 className="heading">you reached the end in the game {userName}!</h1>
    <h3 className="primary_text">your final score is:</h3>
    <h3 className="final_score">{score}% </h3>
   {paragraph &&  <p className="paragraph">I Love You  {userName}</p>}
    <button className="play_again_btn" 
    onClick={() => handleClick()}
    >play again</button>
</Card>
  ) 
}

export default FinalPage;