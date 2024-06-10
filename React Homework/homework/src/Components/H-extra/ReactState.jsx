import { useRef, useState } from "react";
import "./reactstate-style.css";

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ReactState = () => {
  const [figure, setFigure] = useState("circler");
  const [figure2, setFigure2] = useState("circler");
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);
  const [squares, setSquares] = useState([]);
  const [squaresColor, setSquaresColor] = useState([]);
  const id = useRef(1);

  const randomNumber = () => {
    let random = rand(5, 20);
    setNumber(random);
  };

  const addSquare = () => {
    setSquares((s) => [...s, { id: id.current++ }]);
  };

  const resetSquare = () => {
    setSquaresColor([]);
  };

  const addSquareColor = (color) => {
    setSquaresColor((s) => [...s, { id: id.current++, color: color }]);
  };

  return (
    <>
      {/* //1 */}
      <div className="r-container">
        <div className={figure}></div>
        <button
          type="button"
          className="btn-rs"
          onClick={() =>
            setFigure((f) => (f === "circler" ? "square" : "circler"))
          }
        >
          Change
        </button>
      </div>
      {/* //2 */}
      <div className="r-container two">
        <div className={figure2}>{number}</div>
        <div className="buttons">
          <button
            type="button"
            className="btn-rs"
            onClick={() =>
              setFigure2((f) => (f === "circler" ? "square" : "circler"))
            }
          >
            Change
          </button>
          <button type="button" className="btn-rs" onClick={randomNumber}>
            Random
          </button>
        </div>
      </div>
      {/* //3 */}
      <div className="r-container three">
        <h1 className="count">{count}</h1>
        <div className="buttons">
          <button
            type="button"
            className="plus"
            onClick={() => setCount((c) => c + 1)}
          >
            Plus
          </button>
          <button
            type="button"
            className="minus"
            onClick={() => setCount((c) => c - 3)}
          >
            Minus
          </button>
        </div>
      </div>
      {/* //4 */}
      <div className="r-container four">
        <h1 className="four-container">
          {squares.map((s) => (
            <div key={s.id} className="blue-sq"></div>
          ))}
        </h1>
        <div className="buttons">
          <button type="button" className="plus" onClick={addSquare}>
            Add
          </button>
        </div>
      </div>
      {/* //5 */}

      <div className="r-container five">
        <h1 className="five-container">
          {squaresColor.map((s) => (
            <div key={s.id} className={s.color + "-sq"}></div>
          ))}
        </h1>
        <div className="buttons">
          <button
            type="button"
            className="plus"
            onClick={() => addSquareColor("red")}
          >
            Add red
          </button>
          <button type="button" className="plus" onClick={resetSquare}>
            Reset
          </button>
          <button
            type="button"
            className="plus"
            onClick={() => addSquareColor("blue")}
          >
            Add blue
          </button>
        </div>
      </div>
    </>
  );
};
export default ReactState;
