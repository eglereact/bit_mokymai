import { useState, useEffect, createContext, useReducer } from "react";
import "./App.css";
import "./buttons.scss";
import colors from "./buttons.module.scss";
import useAdder from "./Components/015/useAdder";
import countReducer from "./Components/015/countReducer";
import * as A from "./Actions/counterActions";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, dispatchCount2] = useReducer(countReducer, 0);
  const [range, setRange] = useState(10);
  // const add1 = () => {
  //   const action = {
  //     type: T.ADD_1,
  //   };
  //   dispatchCount2(action);
  // };

  // const remove1 = () => {
  //   const action = {
  //     type: T.REMOVE_1,
  //   };
  //   dispatchCount2(action);
  // };

  // const addRange = () => {
  //   const action = {
  //     type: T.ADD_RANGE,
  //     payload: range,
  //   };
  //   dispatchCount2(action);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {" "}
          State: {count1} ||| Reducer: {count2}
        </h1>
        <div className="buttons">
          <button
            type="button"
            className="green"
            onClick={() => setCount1((c) => c + 1)}
          >
            add 1 (state)
          </button>
          <button
            type="button"
            className="yellow"
            onClick={() => dispatchCount2(A.add1())}
          >
            add 1 (reducer)
          </button>
          <button
            type="button"
            className="red"
            onClick={() => dispatchCount2(A.remove1())}
          >
            rem 1 (reducer)
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="blue"
            onClick={() => dispatchCount2(A.add_range(range))}
          >
            add range {range}
          </button>
          <input
            type="range"
            value={range}
            onChange={(e) => setRange(+e.target.value)}
            min={10}
            max={99}
            step={1}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
