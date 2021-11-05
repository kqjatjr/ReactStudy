import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState<number>(0);

  const numberPlus = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={numberPlus}>+</button>
    </div>
  );
};

export default Counter;
