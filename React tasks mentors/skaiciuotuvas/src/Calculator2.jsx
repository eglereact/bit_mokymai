import { useState } from "react";
import "./calculator2.css";
import { evaluate } from "mathjs";

function Calculator2() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setValue(evaluate(value).toString());
    } catch (e) {
      setValue("Error");
    }
  };

  const buttons = [
    ["AC", handleClear],
    ["DE", handleDelete],
    [".", handleClick],
    ["/", handleClick],
    ["7", handleClick],
    ["8", handleClick],
    ["9", handleClick],
    ["*", handleClick],
    ["4", handleClick],
    ["5", handleClick],
    ["6", handleClick],
    ["+", handleClick],
    ["1", handleClick],
    ["2", handleClick],
    ["3", handleClick],
    ["-", handleClick],
    ["00", handleClick],
    ["0", handleClick],
    ["%", handleClick],
    ["=", handleEvaluate],
  ];

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div className="buttons">
            {buttons.map(([btnValue, handler], index) => (
              <input
                key={index}
                type="button"
                value={btnValue}
                onClick={handler}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator2;
