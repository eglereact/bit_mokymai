import { useRef, useState, useEffect } from "react";
import "./App.css";
import "./buttons.scss";

function App() {
  const [cb, setCb] = useState({ A: false, B: true, C: false, D: true });
  const [radio, setRadio] = useState("rC");
  const [images, setImages] = useState(null);
  const cbc = (
    <svg
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Glyph">
        <path d="m22 11a1 1 0 0 0 -1 1v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2h-8a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-6a1 1 0 0 0 -1-1z" />
        <path d="m8.7 8.5a1 1 0 1 0 -1.4 1.42l3.86 3.79a1 1 0 0 0 1.4 0l8.14-8a1 1 0 0 0 -1.4-1.42l-7.44 7.31z" />
      </g>
    </svg>
  );

  const cbu = (
    <svg
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Glyph">
        <path d="m22 11a1 1 0 0 0 -1 1v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2h-8a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-6a1 1 0 0 0 -1-1z" />
      </g>
    </svg>
  );

  const rbc = (
    <svg
      height="97.75"
      viewBox="0 0 97.75 97.75"
      width="97.75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m48.875 29.791c-10.022 0-18.176 8.561-18.176 19.084s8.154 19.084 18.176 19.084c10.021 0 18.176-8.561 18.176-19.084s-8.155-19.084-18.176-19.084z" />
          <path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" />
        </g>
      </g>
    </svg>
  );

  const rbu = (
    <svg
      height="97.75"
      viewBox="0 0 97.75 97.75"
      width="97.75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m48.875 0c-26.993 0-48.875 21.882-48.875 48.875s21.882 48.875 48.875 48.875 48.875-21.882 48.875-48.875-21.882-48.875-48.875-48.875zm0 84.086c-18.915 0-34.303-15.795-34.303-35.211s15.388-35.211 34.303-35.211c18.914 0 34.303 15.795 34.303 35.211s-15.389 35.211-34.303 35.211z" />
        </g>
      </g>
    </svg>
  );

  const removeX = (
    <svg width="469.404px" height="469.404px" viewBox="0 0 469.404 469.404">
      <g>
        <path
          d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0
		L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671
		l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0
		l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671
		L310.4,235.083z"
        />
      </g>
    </svg>
  );

  const handleCb = (e) => {
    setCb((boxes) => ({ ...boxes, [e.target.id]: !boxes[e.target.id] }));
  };

  const handleRadio = (e) => {
    setRadio((r) => (r === e.target.id ? "" : e.target.id));
  };

  const imageInput = useRef();

  const imageReader = (img) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImage = (e) => {
    imageReader(e.target.files[0])
      .then((res) => setImages(res))
      .catch(() => setImages(null));
  };

  const clearImage = () => {
    imageInput.current.value = null;
    setImages(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>009</h1>
        <div className="cb-svg">{removeX}</div>
        <div className="cb-svg">{rbu}</div>
        <fieldset>
          <legend>File</legend>
          <input type="file" ref={imageInput} onChange={handleImage} />
        </fieldset>
        <div className="up-img">
          {" "}
          {images ? (
            <>
              <span className="cb-svg remove" onClick={clearImage}>
                {removeX}
              </span>
              <img src={images} alt="uploaded" />
            </>
          ) : null}
        </div>
        <fieldset>
          <legend>Checkbox</legend>
          <div className="cb">
            <input
              type="checkbox"
              name="A"
              id="A"
              checked={cb.A}
              onChange={handleCb}
            />{" "}
            <span className="cb">A</span>
            <label className="cb-svg" htmlFor="A">
              {cb.A ? cbc : cbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="B"
              id="B"
              checked={cb.B}
              onChange={handleCb}
            />{" "}
            <span className="cb">B</span>
            <label className="cb-svg" htmlFor="B">
              {cb.B ? cbc : cbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="C"
              id="C"
              checked={cb.C}
              onChange={handleCb}
            />{" "}
            <span className="cb">C</span>
            <label className="cb-svg" htmlFor="C">
              {cb.C ? cbc : cbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="D"
              id="D"
              checked={cb.D}
              onChange={handleCb}
            />{" "}
            <span className="cb">D</span>
            <label className="cb-svg" htmlFor="D">
              {cb.D ? cbc : cbu}
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Radio Buttons</legend>
          <div className="cb">
            <input
              type="checkbox"
              name="A"
              id="rA"
              checked={radio === "rA"}
              onChange={handleRadio}
            />{" "}
            <span className="cb">A</span>
            <label className="cb-svg" htmlFor="rA">
              {radio === "rA" ? rbc : rbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="B"
              id="rB"
              checked={radio === "rB"}
              onChange={handleRadio}
            />{" "}
            <span className="cb">B</span>
            <label className="cb-svg" htmlFor="rB">
              {radio === "rB" ? rbc : rbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="C"
              id="rC"
              checked={radio === "rC"}
              onChange={handleRadio}
            />{" "}
            <span className="cb">C</span>
            <label className="cb-svg" htmlFor="rC">
              {radio === "rC" ? rbc : rbu}
            </label>
          </div>
          <div className="cb">
            <input
              type="checkbox"
              name="D"
              id="rD"
              checked={radio === "rD"}
              onChange={handleRadio}
            />{" "}
            <span className="cb">D</span>
            <label className="cb-svg" htmlFor="rD">
              {radio === "rD" ? rbc : rbu}
            </label>
          </div>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
