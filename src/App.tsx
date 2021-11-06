import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./Components/EventPractice";
import ValidationSample from "./Components/ValidationSample";
import IterationSample from "./Components/IterationSample";
import ScrollBox from "./Components/ScrollBox";

function App() {
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
      <div>
        <ScrollBox />
        <button>맨아래로</button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
