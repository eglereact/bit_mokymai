import { useRef, useState } from "react";
import randomColor from "./Functions/randColor";
import "./App.css";
import "./buttons.scss";
import Buttons from "./Components/005/Buttons";
import Counter from "./Components/005/Counter";
import SquareButtons from "./Components/005/SquareButtons";
import SquareBin from "./Components/005/SquareBin";

function App() {
  const [counter, setCounter] = useState(50);
  const [sq, setSq] = useState([]);
  const id = useRef(1);
  const addSquare = () => {
    setSq((a) => [...a, { id: id.current++, color: randomColor(), rotate: 0 }]);
  };

  const rotateSq = (id) => {
    setSq((a) =>
      a.map((s) => (s.id === id ? { ...s, rotate: s.rotate + 15 } : s))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter counter={counter} />
        <Buttons setCounter={setCounter} />
        <SquareBin sq={sq} rotateSq={rotateSq} />
        <SquareButtons addSquare={addSquare} />
      </header>
    </div>
  );
}

export default App;
