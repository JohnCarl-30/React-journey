import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import { type JSX } from "react";
function Timer(): JSX.Element | null {
    const { dispatch, secondsRemaining } = useQuiz();

    // If secondsRemaining is null (e.g., before the quiz starts), we render nothing
    if (secondsRemaining === null) return null;

    const mins: number = Math.floor(secondsRemaining / 60);
    const seconds: number = secondsRemaining % 60;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(
        function () {

            const id = setInterval(function () {
                dispatch({ type: "tick" });
            }, 1000);

            // Cleanup function to prevent memory leaks
            return () => clearInterval(id);
        },
        [dispatch]
    );

    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins}:{seconds < 10 && "0"}
            {seconds}
        </div>
    );
}

export default Timer;