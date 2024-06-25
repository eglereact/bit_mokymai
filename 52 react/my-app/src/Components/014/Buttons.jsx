import { useContext } from "react";
import { CounterContext } from "./Counter";

const Buttons = () => {
  return <div>Buttons</div>;
};
export default Buttons;

const Blue = () => {
  const { add, counter } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" onClick={add} className="blue">
        Add ({counter})
      </button>
    </div>
  );
};
const Yellow = () => {
  const { add, counter } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" onClick={add} className="yellow">
        Add ({counter})
      </button>
    </div>
  );
};

Buttons.Blue = Blue;
Buttons.Yellow = Yellow;
