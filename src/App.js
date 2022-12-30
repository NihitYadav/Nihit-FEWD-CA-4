// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./App.css";
import questions from "./questions";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const[score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }

    if(currentQuestion + 1 <questions.length){
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }

  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  const [color, setcolor] = useState(false);
      const themeChange=()=>{
        setcolor(!color);
        if(color){
          document.body.style.backgroundColor="white"
          document.querySelector("#theme").innerHTML="Dark"
        }
        else{
          document.body.style.backgroundColor="gray"
          document.querySelector("#theme").innerHTML="light"
        }
      }

  return (
    <div className="App">
      {/* 1. Header */}
      <div id="top">
        <h3 id="kv">Kalvium </h3>
        <h3 id="theme" onClick={themeChange}>light</h3>
      </div>

      {showFinalResults ? (
        /* 3. Final results */
        <div className="final-results">
          <h1 id="Finalr">Final Results</h1>
          <h2 id="score">{score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
          <div id="rest"><div id="restart" onClick={() => restartGame()}>Restart game</div></div>
        </div>
      ) : (
        /* 2. Question card */
        <div className="question-card">
          <h2 id="ques">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul id="ul">
            {questions[currentQuestion].options.map((option) => {
              return (
              <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
            );
            })}
          </ul>
          <div id="mains">
            <div id="high">Highlight</div>
            <div id="remhigh">Remove Highlight</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
