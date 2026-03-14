import { type JSX } from "react";
import { useQuiz } from "../context/QuizContext";

function Progress(): JSX.Element {
    const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

    return (
        <header className="progress">
            {/* Using Number(answer !== null) is a clever way to 
          increment the bar as soon as an answer is selected. 
      */}
            <progress max={numQuestions} value={index + Number(answer !== null)} />

            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}
            </p>

            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    );
}

export default Progress;