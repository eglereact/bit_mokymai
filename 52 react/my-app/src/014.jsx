import { useState, useEffect, createContext } from "react";
import "./App.css";
import "./buttons.scss";
import colors from "./buttons.module.scss";
import Button1 from "./Components/014/Button1";
import Counter from "./Components/014/Counter";
import Button2 from "./Components/014/Button2";
import Buttons from "./Components/014/Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>014 CONTEXT Part 2</h1>
        <div className="buttons">
          <Counter>
            <Button1 />
            <Buttons.Blue />
            <Buttons.Yellow />
            <Button2 />
          </Counter>
        </div>
      </header>
    </div>
  );
}

export default App;
