import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      const computedResult = evaluateExpression(input);
      setResult(computedResult);
    } catch (e) {
      setResult("Error");
    }
  };

  const evaluateExpression = (expression) => {
    const operators = expression.split(/[\d.]+/).filter(Boolean);
    const numbers = expression.split(/[^.\d]+/).map(Number);

    let index = 0;
    let currentResult = numbers[index++];

    operators.forEach((operator) => {
      switch (operator) {
        case "+":
          currentResult += numbers[index++];
          break;
        case "-":
          currentResult -= numbers[index++];
          break;
        case "*":
          currentResult *= numbers[index++];
          break;
        case "/":
          currentResult /= numbers[index++];
          break;
        default:
          throw new Error("Invalid operator");
      }
    });

    return currentResult;
  };

  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <main>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result == 0 ? result : `= ${result}`}</div>
        </div>
        <div className="buttons">
          {buttons.map((button, index) => {
            if (button === "C") {
              return (
                <button key={index} onClick={handleClear}>
                  C
                </button>
              );
            } else if (button === "=") {
              return (
                <button key={index} onClick={handleCalculate}>
                  =
                </button>
              );
            } else {
              return (
                <button key={index} onClick={() => handleClick(button)}>
                  {button}
                </button>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
};
export default Calculator;

//   Sukurkite react biblioteka paremtą skaičiuotuvą. Aplikacijos esmė:
// Atvaizduojami:
// Mygtukai su skaičiais nuo 0 iki 9.
// Mygtukai su aritmetiniais veiksmais: Daugyba, dalyba, sudėtis ir atimtis.
// Mygtukas rezultatui išvesti.
// Suvedami duomenys: pirmas skaičius, aritmetinis veiksmas, antras skaičius ir po paspaudimo ant rezultato mygtuko šis atvaizduojamas komponente.
// Patikrinkite ar atliekamas veiksmas yra validus t.y. Ar nėra bandoma atlikti dalybos iš nulio.
