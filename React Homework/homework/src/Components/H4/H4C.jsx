import { useEffect, useState } from "react";
import "./h4-style.css";

const H4C = () => {
  const [count, setCount] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("count");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  const increase = () => {
    setCount((oc) => oc + 1);
  };

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="container3">
      <h1>{count}</h1>
      <button type="button" className="button-1" onClick={increase}>
        +
      </button>
    </div>
  );
};
export default H4C;
