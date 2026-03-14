import { useReducer, type ChangeEvent } from "react";
import type { CounterState, CounterAction } from "../types/types";

const initialState: CounterState = { count: 0, step: 1 };

function reducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case "dec":
            return { ...state, count: state.count - state.step };
        case "inc":
            return { ...state, count: state.count + state.step };
        case "setCount":
            return { ...state, count: action.payload };
        case "setStep":
            return { ...state, step: action.payload };
        case "reset":
            return initialState;
        default:

            throw new Error("Unknown action");
    }
}

function DateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count, step } = state;

    // Formatting the date
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + count);

    // Event Handlers with typed events
    const dec = () => dispatch({ type: "dec" });
    const inc = () => dispatch({ type: "inc" });

    const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "setCount", payload: Number(e.target.value) });
    };

    const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "setStep", payload: Number(e.target.value) });
    };

    const reset = () => dispatch({ type: "reset" });

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default DateCounter;