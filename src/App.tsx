import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuestions} from "./services/services";
import { QuestionType } from "./Types/types";

function App() {

  const [questions, setQuestions]  = useState<QuestionType[]>([]);

  useEffect(() => {
   const fetchData = async () => {
      // let questions: QuestionType[] = await getQuestions(5, "easy")
      // console.log(questions);
      setQuestions(await getQuestions(5, "easy"));
    }
    fetchData();
    console.log("question: ", questions);
  }, []);

  return (
    <div className="App">
      Working
    </div>
  );
}

export default App;
