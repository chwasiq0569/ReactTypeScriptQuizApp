import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuestions} from "./services/services";
import { QuestionType } from "./Types/types";
import Questions from "./components/Questions";
import './assets/output.css';

function App() {

  const [questions, setQuestions]  = useState<QuestionType[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState<number>(0);
  useEffect(() => {
   const fetchData = async () => {
      setQuestions(await getQuestions(5, "easy"));
    }
    
    fetchData();
  }, []);

  

  const callback = () => {
    if(currentQuestion < questions.length - 1){
      setCurrentQuestion(++currentQuestion);
    }
    else{
      console.log("Wrong Answer")
      alert("Quiz End");
    }
  }

  const checkAnswer = (e: React.FormEvent<EventTarget>, selectedAnswer: string, answer: string) => {
    e.preventDefault();
    if(selectedAnswer === answer){
      callback();
    }
    else{
      console.log("Wrong Answer")
      alert("Wrong Answer Try Again");
    }
  }

  if(!questions.length) return <h1>Loading</h1>;

  return (
    <div className="App">
        <Questions question={questions[currentQuestion]?.question} correct_answer={questions[currentQuestion]?.correct_answer} incorrect_answers={questions[currentQuestion]?.incorrect_answers} checkAnswer={checkAnswer} />
    </div>
  );
}

export default App;
