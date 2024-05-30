import "./App.css";
import Bebras from "./Components/001/Bebras";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "skyblue", letterSpacing: "15px" }}>Hello React</h1>
        {2 * 5}
        <Bebras />
      </header>
    </div>
  );
}

export default App;
