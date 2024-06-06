import { useRef, useState } from "react";
import "./h4-style.css";

const H4B = () => {
  const [square, setSquare] = useState([]);
  const idSq = useRef(1);

  const addSquare = () => {
    setSquare((s) => [...s, { id: idSq.current++, count: 0 }]);
  };

  const addOne = (id) => {
    setSquare((s) =>
      s.map((sq) => (sq.id === id ? { ...sq, count: sq.count + 1 } : sq))
    );
  };

  return (
    <div className="container2">
      <div className="square-box">
        {square.map((s) => (
          <div className="square-black" key={s.id}>
            <h1>{s.count}</h1>
            <button
              type="button"
              className="plus-btn"
              onClick={() => addOne(s.id)}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="button-1" onClick={addSquare}>
        Pridėti
      </button>
    </div>
  );
};
export default H4B;
