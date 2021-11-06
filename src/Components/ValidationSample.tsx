import React, { useState } from "react";
import "../CSS/ValidationSample.css";

type propsCheck = {
  password: string;
  clicked: boolean;
  validated: boolean;
};

const ValidationSample = () => {
  const [vali, setVali] = useState<propsCheck>({
    password: "",
    clicked: false,
    validated: false,
  });

  const { password, clicked, validated } = vali;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVali = {
      ...vali,
      [e.target.name]: e.target.value,
    };
    setVali(nextVali);
  };

  const handleButtonClick = () => {
    const nextCheck = {
      ...vali,
      clicked: true,
      validated: password === "0000",
    };
    setVali(nextCheck);
  };

  return (
    <div>
      <input
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
