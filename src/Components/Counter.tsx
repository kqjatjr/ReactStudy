import { useState } from "react";

// React에서 state는 바뀔수 있는 값을 말한다.
// Props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이다.

const Counter = () => {
  const [number, setNumber] = useState(0);

  const numberPlus = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div>
      <h1> {number} </h1>
      <button onClick={numberPlus}>+</button>
    </div>
  );
};

export default Counter;
