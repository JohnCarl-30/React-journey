/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import type { Question, QuizContextValue } from "../types/types";
import { initialState, reducer } from "./QuizReducer";

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { questions } = state;

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    useEffect(() => {
        fetch("http://localhost:9000/questions")
            .then((res) => res.json())
            .then((data: Question[]) => dispatch({ type: "dataReceived", payload: data }))
            .catch(() => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <QuizContext.Provider value={{ ...state, numQuestions, maxPossiblePoints, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) throw new Error("useQuiz must be used within a QuizProvider");
    return context;
}