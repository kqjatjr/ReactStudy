import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const $inputEl = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 랜더링될때만 함수생성

  const onInsert = useCallback(() => {
    setList((prevList) => prevList.concat(parseInt(number)));
    setNumber("");
    if ($inputEl.current !== null) $inputEl.current.focus();
  }, [number, list]); // 리스트 혹은 넘버가 바뀌었을때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={$inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
