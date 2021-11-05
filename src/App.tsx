import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import Say from "./Components/Say";
import EventPractice from "./Components/EventPractice";

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
    </div>
  );
}

export default App;
