import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import Say from "./Components/Say";

function App() {
  return (
    <div className="App">
      <MyComponent name="react" favoriteNumber={3}>
        리엑트
      </MyComponent>
      <br />
      <Counter />
      <br />
      <Say />
    </div>
  );
}

export default App;
