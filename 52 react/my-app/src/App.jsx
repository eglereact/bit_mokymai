import { useState, useRef } from "react";
import "./App.css";
import "./buttons.scss";
import randomColor from "./Functions/randColor";
function App() {
  const [count, setCount] = useState(100);
  const [figure, setFigure] = useState("square");
  const [sq, setSq] = useState([]);

  const add1 = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const minus1 = () => {
    setCount((oldCount) => oldCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const big = () => {
    setCount((oldCount) => oldCount * oldCount);
  };

  const changeFigure = () => {
    setFigure((f) => (f === "square" ? "circle" : "square"));
  };

  const id = useRef(1);

  const addSquare = () => {
    setSq((a) => [...a, { id: id.current++, color: randomColor() }]);
  };

  const removeSquareEnd = () => {
    setSq((a) => a.filter((s, i) => i !== a.length - 1));
  };

  const removeSquareFirst = () => {
    setSq((a) => a.filter((s, i) => i !== 0));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={changeFigure}
          style={{
            cursor: "pointer",
            width: "200px",
            height: "200px",
            transition: "all 0.5s",
            backgroundColor: figure === "square" ? "skyblue" : "crimson",
            borderRadius: figure === "square" ? null : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{count}</h1>
        </div>
        <div className="sq-bin">
          {sq.map((s) => (
            <div
              className="sq"
              key={s.id}
              style={{
                backgroundColor: s.color + "66",
                borderColor: s.color,
              }}
            >
              {s.id}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" className="green" onClick={add1}>
            +1
          </button>
          <button type="button" className="white" onClick={reset}>
            reset
          </button>
          <button type="button" className="red" onClick={minus1}>
            -1
          </button>
          <button type="button" className="yellow" onClick={big}>
            **
          </button>
          <button type="button" className="green" onClick={addSquare}>
            Add
          </button>
          <button type="button" className="red" onClick={removeSquareEnd}>
            Remove last
          </button>
          <button type="button" className="red" onClick={removeSquareFirst}>
            Remove first
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
