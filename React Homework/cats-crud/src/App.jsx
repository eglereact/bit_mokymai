import { useEffect, useState } from "react";
import "./App.css";
import Create from "./Components/Create";
import CatsList from "./Components/CatsList";
import * as storage from "./Functions/ls";
import Delete from "./Components/Delete";

const dv = {
  name: "",
  weight: "",
  image: "/src/images/bandit.png",
  features: {
    curiuos: false,
    gentle: false,
    friendly: false,
    playful: false,
    cautious: false,
    calm: false,
  },
  age: "0-1",
};

const key = "cats";

function App() {
  const [cats, setCats] = useState(null);
  const [createModal, setCreateModal] = useState(null);
  const [store, setStore] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [deleteModal, setDeleteModal] = useState(null);
  const [destroy, setDestroy] = useState(null);

  useEffect(() => {
    if (null === store) {
      return;
    }
    storage.lsCreate(key, store);
    setStore(null);
    setRefresh(Date.now());
  }, [store]);

  useEffect(() => {
    setCats(storage.lsRead(key));
  }, [refresh]);

  useEffect(() => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(key, destroy.id);
    setDestroy(null);
    setRefresh(Date.now());
  }, [destroy]);

  return (
    <>
      <div>
        <button
          type="button"
          className="bg-green-600 p-4"
          onClick={() => setCreateModal(dv)}
        >
          Add a new cat
        </button>
        <div>
          <CatsList cats={cats} setDeleteModal={setDeleteModal} />
        </div>
      </div>
      {createModal !== null && (
        <Create
          createModal={createModal}
          setStore={setStore}
          setCreateModal={setCreateModal}
        />
      )}
      {deleteModal !== null && (
        <Delete
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          setDestroy={setDestroy}
        />
      )}
    </>
  );
}

export default App;
