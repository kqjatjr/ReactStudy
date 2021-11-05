import React, { useState } from "react";

type propsType = {
  username: string;
  message: string;
};

const EventPractice = () => {
  // const [message, setMessage] = useState<string>("");
  // const [username, setUsername] = useState<string>("");

  const [form, setForm] = useState<propsType>({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const ChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextValue);
  };

  const CheckValue = () => {
    alert(message + ": " + username);
    setForm({
      username: "",
      message: "",
    });
  };

  const HandleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      CheckValue();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={ChangeValue}
      />
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해 보세요"
        value={username}
        onChange={ChangeValue}
        onKeyDown={HandleKeyPress}
      />
      <button onClick={CheckValue}>확인</button>
    </div>
  );
};

export default EventPractice;
