import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <MyComponent name="react" favoriteNumber={3}>
        리엑트
      </MyComponent>
      <br />
      <Counter />
    </div>
  );
}

export default App;
