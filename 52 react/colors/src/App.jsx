import List from "./Components/List";
import "./app.scss";
import * as storage from "./Functions/ls";
import Create from "./Components/Create";
import { useState } from "react";

function App() {
  const [create, setCreate] = useState(null);
  console.log(create);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <button className="blue" type="button">
                Add new color
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <List />
          </div>
        </div>
      </div>
      <Create setCreate={setCreate} />
    </>
  );
}

export default App;
