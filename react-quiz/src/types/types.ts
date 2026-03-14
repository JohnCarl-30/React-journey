// types.ts
import type { Dispatch } from "react";

export interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface QuizState {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

export type QuizAction =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "tick" };

export interface QuizContextValue extends QuizState {
  numQuestions: number;
  maxPossiblePoints: number;
  dispatch: Dispatch<QuizAction>;
}

export interface CounterState {
  count: number;
  step: number;
}

export type CounterAction =
  | { type: "inc" | "dec" | "reset" } // Simple actions
  | { type: "setCount" | "setStep"; payload: number }; // Actions with data
