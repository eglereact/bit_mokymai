import "./App.css";
import Price2 from "./Components/002/Price2";

function App() {
  const price = 100;
  const color = "orange";
  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
        <Price2 productPrice={price} discount={20} color={color} />
      </header>
    </div>
  );
}

export default App;
