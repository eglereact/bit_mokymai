import { useContext } from "react";
import { CounterContext } from "./Counter";

const Button2 = () => {
  const { add, counter } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" onClick={add} className="red">
        Add ({counter})
      </button>
    </div>
  );
};
export default Button2;
