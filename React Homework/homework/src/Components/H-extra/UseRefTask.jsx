import { useEffect, useRef, useState } from "react";
import rand from "../../Functions/rand";

const UseRefTask = () => {
  const [squares, setSquares] = useState(() => {
    const savedSquares = localStorage.getItem("squares");
    return savedSquares ? JSON.parse(savedSquares) : [];
  });

  const historyRef = useRef([]);
  const stepRef = useRef(0);

  useEffect(() => {
    localStorage.setItem("squares", JSON.stringify(squares));
  }, [squares]);

  const addSquares = () => {
    const numberOfSquares = rand(5, 10);
    const newSquares = Array.from({ length: numberOfSquares }, () => ({
      id: rand(1000000, 9999999),
    }));
    historyRef.current = [...historyRef.current, squares];

    stepRef.current = historyRef.current.length;

    setSquares((s) => [...s, ...newSquares]);
  };

  useEffect(() => {
    console.log("stepRef.current", stepRef.current);
    console.log("historyRef.current.length", historyRef.current.length);
    console.log("----------------");
    console.log("historyRef.current", historyRef.current);
    console.log("[...historyRef.current, squares]", [
      ...historyRef.current,
      squares,
    ]);
  });

  const clearSquares = () => {
    historyRef.current = [...historyRef.current, squares];
    stepRef.current = historyRef.current.length;
    setSquares([]);
  };

  const undo = () => {
    if (stepRef.current > 0) {
      setSquares(historyRef.current[--stepRef.current]);
      historyRef.current.length = stepRef.current;
    }
  };

  return (
    <div className="containerRef">
      <div className="squares-container">
        {squares.map((square) => (
          <div key={square.id} className="square p-2">
            <p>{square.id}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={addSquares} className="greenR">
          Pridėti
        </button>
        <button onClick={clearSquares} className="redR">
          Išvalyti
        </button>
        <button
          onClick={undo}
          disabled={stepRef.current === 0}
          className="backR p-3 bg-gray-800 text-white font-bold rounded-md  hover:bg-gray-900"
        >
          Atgal
        </button>
      </div>
    </div>
  );
};
export default UseRefTask;
