import { type JSX } from "react";
import { useQuiz } from "../context/QuizContext";
function NextButton(): JSX.Element | null {
    const { dispatch, answer, index, numQuestions } = useQuiz();

    // TypeScript knows answer can be number | null from our QuizState interface
    if (answer === null) return null;

    if (index < numQuestions - 1)
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Next
            </button>
        );

    if (index === numQuestions - 1)
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
            >
                Finish
            </button>
        );

    return null;
}

export default NextButton;