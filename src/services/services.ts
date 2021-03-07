import { QuestionType, Quiz } from "../Types/types";

export const getQuestions= async (amount: number, difficulty: string): Promise<Quiz[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    let { results } = await response.json();
    let quiz = results.map((questionObj: Quiz) => {
        return {
            question: questionObj.question,
            correct_answer: questionObj.correct_answer,
            incorrect_answers: questionObj.incorrect_answers.concat(questionObj.correct_answer)
        }
    })
    return quiz;
}