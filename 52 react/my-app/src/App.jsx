import { useEffect, useState } from "react";
import "./App.css";
import "./buttons.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log("Outside useEffect");
  useEffect(() => {
    console.log("Green");
  }, [counter]);

  useEffect(() => {
    console.log("Yellow");
  }, [counter2]);

  const clickGreen = () => {
    setCounter((c) => c + 1);
  };

  const clickYellow = () => {
    setCounter2((c) => c + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>006</h1>
        <div className="buttons">
          <button type="button" className="green" onClick={clickGreen}>
            {counter}
          </button>
          <button type="button" className="yellow" onClick={clickYellow}>
            {counter2}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
