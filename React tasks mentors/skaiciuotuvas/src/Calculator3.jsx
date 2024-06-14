import { log } from "mathjs";
import { useState } from "react";

const Calculator3 = () => {
  const [num, setNum] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleChangeNum1 = (e) => {
    setNum(e.target.value);
  };

  const handleChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult(() => +num + +num2);
    setNum("");
    setNum2("");
  };

  const handleMinus = () => {
    setResult(() => +num - +num2);
    setNum("");
    setNum2("");
  };

  const handleMulti = () => {
    setResult(() => +num * +num2);
    setNum("");
    setNum2("");
  };

  const handleDiv = () => {
    setResult(() => +num / +num2);
    setNum("");
    setNum2("");
  };
  return (
    <>
      <input type="number" value={num} onChange={handleChangeNum1} />
      <input type="number" value={num2} onChange={handleChangeNum2} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleMulti}>*</button>
      <button onClick={handleDiv}>/</button>
      <p>Result: {result}</p>
    </>
  );
};
export default Calculator3;
