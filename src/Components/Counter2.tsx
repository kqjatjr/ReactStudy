import { useState } from "react";

const Counter2 = () => {
  const [value, setValue] = useState<number>(0);

  const onCountAdd = () => {
    setValue((prev) => prev + 1);
  };

  const onCountSub = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={onCountAdd}>+</button>
      <button onClick={onCountSub}>-</button>
    </div>
  );
};

export default Counter2;
