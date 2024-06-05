import { useState } from "react";
import "./App.css";
import "./buttons.scss";
import Fig from "./Components/003/Fig";
import Fruit from "./Components/003/Fruit";

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pear",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "watermelon",
];

const fruits2 = [
  { id: 1, name: "apple", color: "red" },
  { id: 2, name: "banana", color: "yellow" },
  { id: 3, name: "cherry", color: "red" },
  { id: 4, name: "date", color: "brown" },
  { id: 5, name: "elderberry", color: "black" },
  { id: 6, name: "fig", color: "purple" },
  { id: 7, name: "grape", color: "purple" },
  { id: 8, name: "honeydew", color: "green" },
  { id: 9, name: "kiwi", color: "brown" },
  { id: 10, name: "lemon", color: "yellow" },
  { id: 11, name: "mango", color: "orange" },
  { id: 12, name: "nectarine", color: "orange" },
  { id: 13, name: "orange", color: "orange" },
  { id: 14, name: "pear", color: "green" },
  { id: 15, name: "quince", color: "yellow" },
  { id: 16, name: "kiwi", color: "brown" },
  { id: 17, name: "cherry", color: "red" },
];

function App() {
  const [count, setCount] = useState(0);

  const blueClick = () => {
    console.log("blue clicked");
    setCount((c) => c + 1);
  };

  const redClick = (what) => {
    console.log("red clicked", what);
  };
  const buttonClick = (e, v = "") => {
    console.log("Button clicked", e.target.classList.value, v);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>003</h1>
        <h2>{count}</h2>
        <button type="button" className="blue" onClick={blueClick}>
          Click!
        </button>
        <button
          type="button"
          className="red"
          onClick={() => redClick("ka tu?")}
        >
          Click!
        </button>
        <button
          type="button"
          className="yellow"
          onClick={(e) => buttonClick(e, "Valio")}
        >
          Click!
        </button>
        <button type="button" className="white" onClick={buttonClick}>
          Click!
        </button>
        <button type="button" className="green" onClick={buttonClick}>
          Click!
        </button>
        <ul>
          {fruits2.map((f) =>
            f.name !== "fig" ? (
              <Fruit key={f.id} fruit={f} />
            ) : (
              <Fig key={f.id} fruit={f} />
            )
          )}
        </ul>
        <ul>
          {fruits
            .sort((a, b) => b.localeCompare(a))
            .map((f, i) =>
              i % 3 ? (
                <li key={i} style={{ color: "skyblue" }}>
                  {f}
                </li>
              ) : (
                <li key={i} style={{ color: "crimson" }}>
                  {f}
                </li>
              )
            )}
        </ul>
      </header>
    </div>
  );
}

export default App;
