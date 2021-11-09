import React, { useReducer } from "react";

type DemoType = {
  name: string;
  nickname: string;
};

type Action = {
  name: string;
  value: string;
};

const nameReducer = (state: DemoType, action: Action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info2 = () => {
  const [state, dispatch] = useReducer(nameReducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(event.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
