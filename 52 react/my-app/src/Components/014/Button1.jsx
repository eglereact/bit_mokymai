import { useContext } from "react";
import { CounterContext } from "./Counter";

const Button1 = () => {
  const { add, counter } = useContext(CounterContext);

  return (
    <div className="buttons">
      <button type="button" onClick={add} className="green">
        Add ({counter})
      </button>
    </div>
  );
};
export default Button1;
