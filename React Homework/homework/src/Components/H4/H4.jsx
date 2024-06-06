import { useState, useRef } from "react";
import "./h4-style.css";
import oakImg from "./oak.png";
import birchImg from "./birch.png";
import ashImg from "./ash.png";

const H4 = () => {
  const [oak, setOak] = useState([]);
  const [birch, setBirch] = useState([]);
  const [ash, setAsh] = useState([]);
  const id = useRef(1);

  const addOak = () => {
    setOak((a) => [...a, { id: id.current++ }]);
  };

  const addBirch = () => {
    setBirch((a) => [...a, { id: id.current++ }]);
  };

  const addAsh = () => {
    setAsh((a) => [...a, { id: id.current++ }]);
  };

  const removeTree = (treeId) => {
    setOak((a) => a.filter((tree) => tree.id !== treeId));
    setBirch((a) => a.filter((tree) => tree.id !== treeId));
    setAsh((a) => a.filter((tree) => tree.id !== treeId));
  };

  const removeAllOaks = () => {
    setOak([]);
  };

  const removeAllBirch = () => {
    setBirch([]);
  };

  const removeAllAshs = () => {
    setAsh([]);
  };

  return (
    <div className="container">
      <div className="with-btn">
        <div className="treeLand">
          {oak.map((s) => (
            <div className="oak" key={s.id} onClick={() => removeTree(s.id)}>
              <img src={oakImg} />
              <p>Ąžuolas {s.id}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" className="button-68" onClick={addOak}>
            Ąžuolas
          </button>
          <button type="button" className="button-68" onClick={removeAllOaks}>
            Ištrinti viską
          </button>
        </div>
      </div>

      <div className="with-btn">
        <div className="treeLand">
          {birch.map((s) => (
            <div className="oak" key={s.id} onClick={() => removeTree(s.id)}>
              <img src={birchImg} />
              <p>Beržas {s.id}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" className="button-68" onClick={addBirch}>
            Beržas
          </button>
          <button type="button" className="button-68" onClick={removeAllBirch}>
            Ištrinti viską
          </button>
        </div>
      </div>
      <div className="with-btn">
        <div className="treeLand">
          {ash.map((s) => (
            <div className="oak" key={s.id} onClick={() => removeTree(s.id)}>
              <img src={ashImg} />
              <p>Uosis {s.id}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" className="button-68" onClick={addAsh}>
            Uosis
          </button>
          <button type="button" className="button-68" onClick={removeAllAshs}>
            Ištrinti viską
          </button>
        </div>
      </div>
    </div>
  );
};
export default H4;
