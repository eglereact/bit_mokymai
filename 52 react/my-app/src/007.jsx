import { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./buttons.scss";
import Square from "./Components/007/Square";
import rand from "./Functions/rand";

function App() {
  const [countLetter, setCountLetter] = useState(0);
  const [letters, setLetters] = useState("");
  // const [sq, setSq] = useState(() =>
  //   JSON.parse(localStorage.getItem("square") ?? [])
  // );
  const [sq, setSq] = useState(null);
  const makeLetters = useCallback(
    () => () => {
      if (countLetter <= 5) {
        setLetters("A".repeat(countLetter));
      } else {
        setLetters("B".repeat(countLetter));
      }
    },
    [countLetter]
  );

  const doCount = () => {
    setCountLetter((c) => c + 1);
  };

  // const destroySq = (id) => {
  //   setSq((s) => {
  //     const newSq = s.filter((sq) => sq.id !== id);
  //     localStorage.setItem("square", JSON.stringify(newSq));
  //     return newSq;
  //   });
  // };

  const destroySq = (id) => {
    setSq((s) => s.filter((sq) => sq.id !== id));
  };

  useEffect(() => {
    makeLetters();
  }, [countLetter, makeLetters]);

  // const makeSq = () => {
  //   setSq((s) => {
  //     const newSq = [{ id: rand(1000000, 9999999) }, ...s];
  //     localStorage.setItem("square", JSON.stringify(newSq));
  //     return newSq;
  //   });
  // };

  const makeSq = () => {
    setSq((s) => [{ id: rand(1000000, 9999999) }, ...s]);
  };

  useEffect(() => {
    setSq(JSON.parse(localStorage.getItem("sq") ?? "[]"));
  }, []);

  useEffect(() => {
    if (sq === null) {
      return;
    }
    localStorage.setItem("sq", JSON.stringify(sq));
  }, [sq]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="sq-bin">
          {sq !== null ? (
            sq.length ? (
              sq.map((s) => <Square key={s.id} {...s} destroySq={destroySq} />)
            ) : (
              <div>No squares</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <h1>{letters}</h1>
        <div className="buttons">
          <button className="green" type="button" onClick={doCount}>
            {countLetter}
          </button>
          <button className="yellow" type="button" onClick={makeSq}>
            Add []
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
