import List from "./Components/List";
import "./app.scss";
import * as storage from "./Functions/ls";
import Create from "./Components/Create";
import { useEffect, useState } from "react";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";

const dv = {
  shape: "square",
  color: "#000000",
  range: 1,
};

const key = "colors";

function App() {
  const [colors, setColors] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [create, setCreate] = useState(null);
  const [store, setStore] = useState(null);
  const [remove, setRemove] = useState(null); // delete
  const [destroy, setDestroy] = useState(null);
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    if (null === store) {
      return;
    }
    storage.lsCreate(key, store);
    setStore(null);
    setRefresh(Date.now());
  }, [store]);

  useEffect(() => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(key, destroy.id);
    setDestroy(null);
    setRefresh(Date.now());
  }, [destroy]);

  useEffect(() => {
    if (null === update) {
      return;
    }
    storage.lsEdit(key, update, update.id);
    setUpdate(null);
    setRefresh(Date.now());
  }, [update]);

  useEffect(() => {
    setColors(storage.lsRead(key));
  }, [refresh]);

  console.log(store);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <button
                className="blue"
                onClick={() => setCreate(dv)}
                type="button"
              >
                Add new color
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
          </div>
        </div>
      </div>
      {create !== null && (
        <Create create={create} setStore={setStore} setCreate={setCreate} />
      )}
      {remove !== null && (
        <Delete setRemove={setRemove} remove={remove} setDestroy={setDestroy} />
      )}
      {edit !== null && (
        <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} />
      )}
    </>
  );
}

export default App;
