import * as React from 'react';
export interface QuestionsProps {
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    checkAnswer: (e: React.FormEvent<EventTarget>, selectedAnswer: string, answer: string) => void
}
 
const Questions: React.FC<QuestionsProps> = ({question, correct_answer, incorrect_answers, checkAnswer}) => {
    const [selectedValue, setSelectedvalue] = React.useState("");
    // console.log("props: ", question);
    // console.log("props: ", correct_answer);
    // console.log("props: ", incorrect_answers);
    return ( <div>
                <div className="bg-green-600 h-32 flex align-middle justify-center">
                    <h1 className="mt-12 text-xl text-white font-semibold ">{question}</h1>
                </div>               
                <form onSubmit={(e) => checkAnswer(e, selectedValue, correct_answer)} className="flex flex-col justify-center items-center">
                     {
                      incorrect_answers.map((opt: string, index: number) => (
                        <label key={index} className="align-middle h-10 bg-green-600 w-60 pl-4 pr-4 pt-2 pb-2 mt-6 rounded-full text-white">
                            <input onChange={(e) => setSelectedvalue(e.target.value)} type="radio" name="opt" value={opt} />
                            {opt}
                        </label>
                      ))  
                    } 
                    <input className="align-middle h-10 bg-green-600 w-60 pl-4 pr-4 pt-2 pb-2 mt-6 rounded-full text-white font-bold" type="submit" />
                </form>
             </div> );
}
 
export default Questions;