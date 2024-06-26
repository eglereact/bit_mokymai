import { useState, useEffect, createContext } from "react";
import "./App.css";
import "./buttons.scss";
import colors from "./buttons.module.scss";
import useAdder from "./Components/015/useAdder";

function App() {
  const [countAdder, addOne, addTen] = useAdder(-5);

  return (
    <div className="App">
      <header className="App-header">
        <h1>015 custom hooks {countAdder}</h1>
        <div className="buttons">
          <button type="button" className="blue" onClick={addOne}>
            add 1
          </button>
          <button type="button" className="red" onClick={addTen}>
            add 10
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
