import { useEffect, useRef, useState } from "react";
import rand from "../../Functions/rand";

const UseRefTask = () => {
  const [squares, setSquares] = useState(() => {
    const savedSquares = localStorage.getItem("squares");
    return savedSquares ? JSON.parse(savedSquares) : [];
  });
  const [history, setHistory] = useState([]);
  const id = useRef(1);
  const [step, setStep] = useState(0);

  useEffect(() => {
    localStorage.setItem("squares", JSON.stringify(squares));
  }, [squares]);

  const addSquare = () => {
    const numberOfSquares = rand(5, 10);
    const newSquares = [];
    for (let i = 0; i < numberOfSquares; i++) {
      newSquares.push({ id: id.current++ });
    }
    const newHistory = [...history, squares];
    setHistory(newHistory);
    setStep(newHistory.length);
    setSquares((s) => [...s, ...newSquares]);
  };

  const removeAll = () => {
    const newHistory = [...history, squares];
    setHistory(newHistory);
    setStep(newHistory.length);
    setSquares([]);
  };

  const back = () => {
    if (step > 0) {
      const newStep = step - 1;
      setSquares(history[newStep]);
      setStep(newStep);
      setHistory(history.slice(0, newStep));
    }
  };

  const handleStepChange = (event) => {
    const selectedStep = parseInt(event.target.value, 10);
    setSquares(history[selectedStep]);
    setStep(selectedStep);
  };

  return (
    <div className="r-container">
      <div className="five-container">
        {squares.map((s) => (
          <div key={s.id} className="blue-sq"></div>
        ))}
      </div>
      <div className="buttons">
        <button type="button" className="add" onClick={addSquare}>
          Pridėti
        </button>
        <button type="button" className="add" onClick={removeAll}>
          Išvalyti
        </button>
        <button
          type="button"
          className="add"
          onClick={back}
          disabled={step === 0}
        >
          Atgal
        </button>
        <select value={step} onChange={handleStepChange}>
          {history.map((_, index) => (
            <option key={index} value={index}>
              {index + 1} žingsnis
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default UseRefTask;
