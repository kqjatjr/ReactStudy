import React, { useReducer } from "react";

const increment = () =>
  ({
    type: "INCREMENT",
  } as const);

const decrement = () =>
  ({
    type: "DECREMENT",
  } as const);

type Actions = ReturnType<typeof increment | typeof decrement>;

type State = {
  counter: number;
};

const counterReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const Counter3 = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, { counter: 0 });

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{counter}</b>입니다.
      </p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter3;
