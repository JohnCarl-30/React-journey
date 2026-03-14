import { type JSX } from "react";
import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
import type { Question as QuestionType } from "../types/types";

function Question(): JSX.Element | null {
    const { questions, index } = useQuiz();

    // TypeScript knows 'questions' is Question[]
    const question: QuestionType | undefined = questions.at(index);

    // Essential safety check: what if the index is out of bounds?
    if (!question) return null;

    console.log(question);

    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} />
        </div>
    );
}

export default Question;