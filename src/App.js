import { useState } from "react";
import "./App.css";
import FinalPage from "./components/FinalPage";
import QuestionsPage from "./components/QuestionsPage";
import StartingPage from "./components/StartingPage";
import Select from "./components/Select";

function App() {
  const [showSTartindPage, setShowSTartindPage]=useState(true);
  const [showQuestionPage, setQuestionPage]=useState(false);
  const [showFinalPage, setShowFinalPage]=useState(false);
  const [showSelectPage, setShowSelectPage]=useState(false);
  const [paragraph,setParagraph]=useState(false);

  const [questionOne,setQuestionOne]=useState(true);
  const [questionTow,setQuestionTwo]=useState(false);
  const [questionThree,setQuestionThree]=useState(false);
  const [score, setScore]=useState(0);
  const [topScore, setTopScore]=useState(0);
  const [userName, setUserName]=useState("");

  return (
  <div className="App">
    {showSTartindPage && <StartingPage 
    topScore={topScore}
    setShowSelectPage={setShowSelectPage}
    setShowSTartindPage={setShowSTartindPage}
    setQuestionPage={setQuestionPage}
    userName={userName}
    setUserName={setUserName}

    /> }
     {showSelectPage && <Select 
         setShowSelectPage={setShowSelectPage}

     setQuestionOne={setQuestionOne}
     setQuestionTwo={setQuestionTwo}
     setQuestionThree={setQuestionThree}
     setShowSTartindPage={setShowSTartindPage}
    setQuestionPage={setQuestionPage}
 
    /> }
    {showQuestionPage && <QuestionsPage 
    setParagraph={setParagraph}
    questionOne={questionOne}
    questionTow={questionTow}
    questionThree={questionThree}
     score={score} 
     setScore={setScore}
      setQuestionPage={setQuestionPage}
      setShowFinalPage={setShowFinalPage}/> }
    {showFinalPage && <FinalPage
    paragraph={paragraph}
    score={score} 
    setScore={setScore}
    setShowFinalPage={setShowFinalPage}
    topScore={topScore}
    setTopScore={setTopScore}
    setShowSTartindPage={setShowSTartindPage}
    userName={userName}
    setUserName={setUserName}
    
    
    
    
    />}

  
  
  </div>
  )
}

export default App;