import React, { useRef, useState, useEffect } from "react";
import "../CSS/ValidationSample.css";

type DemoData = {
  password: string;
  clicked: boolean;
  validated: boolean;
};

const ValidationSample = () => {
  const $input = useRef<HTMLInputElement>(null);
  const [vali, setVali] = useState<DemoData>({
    password: "",
    clicked: false,
    validated: false,
  });

  const { password, clicked, validated } = vali;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVali(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        }),
    );
  };

  const handleButtonClick = () => {
    setVali(
      (prev) =>
        (prev = {
          ...prev,
          clicked: true,
          validated: password === "0000",
        }),
    );
  };

  useEffect(() => {
    if ($input.current !== null) {
      $input.current?.focus();
    }
  });

  return (
    <div>
      <input
        ref={$input}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
