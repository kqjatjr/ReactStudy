import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName((prev) => (prev = event.target.value));
  };

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname((prev) => (prev = event.target.value));
  };

  useEffect(() => {
    console.log("렌더링이 완료 되었습니다.");
    console.log(name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input
          value={name}
          placeholder="이름을 입력해 주세요"
          onChange={onChangeName}
        />
        <input
          value={nickname}
          placeholder="닉네임을 입력해 주세요"
          onChange={onChangeNickname}
        />
      </div>
      <div>
        <div>
          <b>이름 : {name}</b>
        </div>
        <div>
          <b>닉네임 : {nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
