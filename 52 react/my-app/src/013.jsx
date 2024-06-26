import { useState, useEffect, createContext } from "react";
import "./App.css";
import "./buttons.scss";
import C from "./Components/013/C";
import colors from "./buttons.module.scss";
import D from "./Components/013/D";

export const ButtonContext = createContext();
export const RangeContext = createContext();
export const ColorContext = createContext();

function App() {
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [range, setRange] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>013 -context plus: {range}</h1>
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
        />
        <h1 style={{ color: colors.green }}>{greenCount}</h1>
        <h1 style={{ color: colors.yellow }}>{yellowCount}</h1>
        <RangeContext.Provider value={range}>
          <ButtonContext.Provider
            value={{ color: "green", counter: setGreenCount }}
          >
            <C />
          </ButtonContext.Provider>
          <ButtonContext.Provider
            value={{ color: "yellow", counter: setYellowCount }}
          >
            <C />
          </ButtonContext.Provider>
        </RangeContext.Provider>
        <ColorContext.Provider value="skyblue">
          <D nr={1} />
          <ColorContext.Provider value="crimson">
            <D nr={2} />
          </ColorContext.Provider>
        </ColorContext.Provider>
      </header>
    </div>
  );
}

export default App;
