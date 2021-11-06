import React, { useState } from "react";

// 유니크 키는 벜츄얼 돔의 비교를 편하게 하기위해서사용한다.

// 1. 렌더 트리 안의 html 엘리먼트를 찾아서 레프를 사용하고 싶을대
// 2. 추적이 필요없는 값을 사용하고 싶을때

type DemoData = {
  id: number;
  text: string;
};

const IterationSample = () => {
  const [names, setNames] = useState<DemoData[]>([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addValue = () => {
    const id = nextId + 1;
    setNextId(id);
    setNames((prev) => prev.concat({ id, text: inputText }));
    setInputText("");
  };

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addValue();
    }
  };

  const onDoubleClick = (id: number) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} onKeyDown={keyDown} />
      <button onClick={addValue}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
