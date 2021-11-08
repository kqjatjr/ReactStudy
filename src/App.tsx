import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./Components/EventPractice";
import ValidationSample from "./Components/ValidationSample";
import IterationSample from "./Components/IterationSample";
import Counter2 from "./Components/Counter2";
import Info from "./Components/Info";
import { useState } from "react";
import Counter3 from "./Components/Counter3";

function App() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="App">
      <MyComponent name="react" favoriteNumber={3}>
        리엑트
      </MyComponent>
      <br />
      ---
      <Counter />
      <br />
      ---
      <Say />
      <br />
      ----
      <EventPractice />
      <br />
      ---
      <ValidationSample />
      ---
      <br />
      <IterationSample />
      <br />
      ---
      <Counter2 />
      ---
      <br />
      <div>
        <button
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          보이기
        </button>
        <hr />
        {visible && <Info />}
      </div>
      <br />
      <br />
      <Counter3 />
    </div>
  );
}

export default App;
