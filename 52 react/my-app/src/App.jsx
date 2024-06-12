import { useRef, useState, useEffect } from "react";
import "./App.css";
import "./buttons.scss";

function App() {
  const [text1, setText1] = useState("");
  const [error, setError] = useState(false);

  const [texts, setTexts] = useState({ textA: "", textB: "", textC: "" });
  const [color, setColor] = useState("#282c34");
  const [range, setRange] = useState(30);
  const [select, setSelect] = useState(3);

  const text2 = useRef();

  const animals = [
    { id: 1, name: "fox" },
    { id: 2, name: "cat" },
    { id: 3, name: "dog" },
    { id: 4, name: "mouse" },
    { id: 5, name: "bear" },
    { id: 6, name: "wolf" },
  ];

  useEffect(() => {
    text2.current.focus();
  }, []);

  const handleText1 = (e) => {
    //basic validation
    if (e.target.value.length > 10) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    setText1(e.target.value);
  };

  //niekam tikęs būdas skaityti inputus
  const readRed = () => {
    // const el = document.querySelector("#text2"); niekad nerašti
    console.log("text2", text2.current.value);
  };

  const handleTexts = (e) => {
    setTexts((t) => ({ ...t, [e.target.name]: e.target.value }));
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <h1 style={{ fontSize: range + "px" }}>008 - Controlled Inputs</h1>

        <fieldset>
          <legend>{text1}</legend>
          <input
            type="text"
            value={text1}
            onChange={handleText1}
            style={{ backgroundColor: error ? "crimson" : null }}
          />
          <input type="text" ref={text2} />

          <button
            type="button"
            className="blue"
            onClick={() => console.log("text1 ", text1)}
          >
            Read 1
          </button>
          <button type="button" className="red" onClick={readRed}>
            Read 1
          </button>
        </fieldset>
        {/* ----------------------------- */}
        <fieldset>
          <legend>More text</legend>
          <input
            type="text"
            value={texts.textA}
            name="textA"
            onChange={handleTexts}
          />
          <input
            type="text"
            value={texts.textB}
            name="textB"
            onChange={handleTexts}
          />
          <input
            type="text"
            value={texts.textC}
            name="textC"
            onChange={handleTexts}
          />

          <button
            type="button"
            className="blue"
            onClick={() => console.log("texts ", texts)}
          >
            Read all
          </button>
        </fieldset>

        <fieldset>
          <legend>Color and range</legend>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="range"
            min={20}
            max={60}
            value={range}
            onChange={(e) => setRange(+e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>select</legend>
          <select value={select} onChange={(e) => setSelect(+e.target.value)}>
            {animals.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="blue"
            onClick={() =>
              console.log(
                "animal ",
                select,
                animals.find((a) => a.id === select).name
              )
            }
          >
            what?
          </button>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
