import { useState } from "react";
import { rbc, rbu } from "../styles/svg";

const Create = ({ create, setStore, setCreate, addMsg }) => {
  const [shape, setShape] = useState(create.shape);
  const [color, setColor] = useState(create.color);
  const [range, setRange] = useState(create.range);
  const [errors, setErrors] = useState([]);

  const handleShape = (e) => {
    setShape(e.target.id);
  };

  const save = () => {
    setErrors([]);
    let hasErrors = false;
    if (!shape) {
      addMsg({
        title: "Error",
        type: "error",
        text: "Please select color shape",
      });
      hasErrors = true;
      setErrors((e) => [...e, "shape"]);
    }
    if (range > 8) {
      addMsg({
        title: "Error",
        type: "error",
        text: "Max range is 8.",
      });
      hasErrors = true;
      setErrors((e) => [...e, "range"]);
    }
    if (hasErrors) {
      return;
    }
    setStore({ shape, color, range });
    setCreate(null);
  };

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add your color</h5>
            <button
              type="button"
              onClick={() => setCreate(null)}
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="m-2">
              <label className="form-label">Choose your color</label>
              <input
                type="color"
                className="form-control form-control-color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                title="Choose your color"
              />
            </div>
            <div className="m-2">
              <label
                className={
                  `form-label ` + (errors.includes("range") ? "error" : "")
                }
              >
                How many? <b>{range}</b>
              </label>
              <input
                type="range"
                className="form-range"
                min={1}
                max={10}
                step={1}
                value={range}
                onChange={(e) => setRange(+e.target.value)}
              />
            </div>
            <div className="m-2">
              <label
                className={
                  `form-label ` + (errors.includes("shape") ? "error" : "")
                }
              >
                Shape
              </label>
              <div className="cb-bin">
                <div className="cb">
                  <input
                    type="checkbox"
                    id="square"
                    checked={shape === "square"}
                    onChange={handleShape}
                  />

                  <label className="cb-svg" htmlFor="square">
                    {shape === "square" ? rbc : rbu}
                  </label>
                  <span className="cb">Square</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="circle"
                    checked={shape === "circle"}
                    onChange={handleShape}
                  />

                  <label className="cb-svg" htmlFor="circle">
                    {shape === "circle" ? rbc : rbu}
                  </label>
                  <span className="cb">Circle</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="rounded"
                    checked={shape === "rounded"}
                    onChange={handleShape}
                  />

                  <label className="cb-svg" htmlFor="rounded">
                    {shape === "rounded" ? rbc : rbu}
                  </label>
                  <span className="cb">Rounded</span>
                </div>
                <div className="cb">
                  <input
                    type="checkbox"
                    id="triangle"
                    checked={shape === "triangle"}
                    onChange={handleShape}
                  />

                  <label className="cb-svg" htmlFor="triangle">
                    {shape === "triangle" ? rbc : rbu}
                  </label>
                  <span className="cb">Triangle</span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="green" onClick={save}>
              Add
            </button>
            <button
              type="button"
              className="red"
              onClick={() => setCreate(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Create;
