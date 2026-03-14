import type { QuizState, QuizAction } from "../types/types";

export const SECS_PER_QUESTION = 30;

export const initialState: QuizState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

export function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.points, state.highscore),
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick": {
      const newSeconds =
        state.secondsRemaining !== null ? state.secondsRemaining - 1 : null;
      return {
        ...state,
        secondsRemaining: newSeconds,
        status: newSeconds === 0 ? "finished" : state.status,
      };
    }
    default:
      throw new Error("Action unknown");
  }
}
