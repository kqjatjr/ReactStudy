import { useState } from "react";

const Counter2 = () => {
  const [value, setValue] = useState<number>(0);

  const handleCountAdd = () => {
    setValue((prev) => prev + 1);
  };

  const handleCountSub = () => {
    if (value >= 1) setValue((prev) => prev - 1);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={handleCountAdd}>+</button>
      <button onClick={handleCountSub}>-</button>
    </div>
  );
};

export default Counter2;
