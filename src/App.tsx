import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./Components/EventPractice";
import ValidationSample from "./Components/ValidationSample";
import IterationSample from "./Components/IterationSample";
import Counter2 from "./Components/Counter2";

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
      <Counter2 />
    </div>
  );
}

export default App;
