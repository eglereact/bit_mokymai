import List from "./Components/List";
import "./app.scss";
import * as storage from "./Functions/ls";
import Create from "./Components/Create";
import { useCallback, useEffect, useState } from "react";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";
import axios from "axios";
import Messages from "./Components/Messages";
import { v4 as uuidv4 } from "uuid";

const dv = {
  shape: "",
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
  const [msg, setMsg] = useState([]);
  const [route, setRoute] = useState("landing");

  const removeMsg = useCallback((id) => {
    setMsg((msgs) => msgs.filter((m) => m.id !== id));
  }, []);

  const addMsg = useCallback(
    (m) => {
      const id = uuidv4();
      setMsg((msgs) => [{ ...m, id }, ...msgs]);
      setTimeout(() => {
        removeMsg(id);
      }, 5000);
    },
    [removeMsg]
  );

  const getTitle = useCallback(
    (id, color) => {
      axios
        .get("https://www.thecolorapi.com/id?&hex=" + color.substring(1))
        .then((res) => {
          const title = res.data.name.value;

          storage.lsEdit(key, { title }, id);
          addMsg({
            title: "API",
            type: "info",
            text: "Color was successfully received.",
          });
          setRefresh(Date.now());
        })
        .catch((error) => console.log(error));
    },
    [addMsg]
  );

  useEffect(() => {
    if (null === store) {
      return;
    }
    const id = storage.lsCreate(key, store);
    addMsg({
      title: "colors",
      type: "success",
      text: "Color was added successfully.",
    });
    setStore(null);
    getTitle(id, store.color);
    setRefresh(Date.now());
  }, [store, getTitle, addMsg]);

  useEffect(() => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(key, destroy.id);
    addMsg({
      title: "colors",
      type: "success",
      text: "Color was deleted successfully.",
    });
    setDestroy(null);
    setRefresh(Date.now());
  }, [destroy, addMsg]);

  useEffect(() => {
    if (null === update) {
      return;
    }
    storage.lsEdit(key, update, update.id);
    addMsg({
      title: "colors",
      type: "success",
      text: "Color was edited successfully.",
    });
    getTitle(update.id, update.color);
    setUpdate(null);
    setRefresh(Date.now());
  }, [update, getTitle, addMsg]);

  useEffect(() => {
    setColors(storage.lsRead(key));
  }, [refresh]);

  if (route === "landing") {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="buttons">
              <h1>Landing Page</h1>
              <div>
                <button className="blue" onClick={() => setRoute("colors")}>
                  Got to colors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (route === "colors") {
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
                <div>
                  <button className="green" onClick={() => setRoute("landing")}>
                    Go to Home page
                  </button>
                </div>
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
          <Create
            addMsg={addMsg}
            create={create}
            setStore={setStore}
            setCreate={setCreate}
          />
        )}
        {remove !== null && (
          <Delete
            setRemove={setRemove}
            remove={remove}
            setDestroy={setDestroy}
          />
        )}
        {edit !== null && (
          <Edit setEdit={setEdit} edit={edit} setUpdate={setUpdate} />
        )}
        <Messages msg={msg} removeMsg={removeMsg} />
      </>
    );
  }
}

export default App;
