import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "redux/slice/counterSlice";
import { RootState } from "redux/store";

// to test redux, copy this component into the home component, and you can see how the example works.

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter1.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Counter;
