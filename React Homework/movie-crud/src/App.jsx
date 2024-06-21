import { useEffect, useState } from "react";
import "./App.css";
import CreateModal from "./Components/Categories/CreateModal";
import * as storage from "./Functions/ls";
import CategoriesList from "./Components/Categories/CategoriesList";
import DeleteModal from "./Components/Categories/DeleteModal";
import EditModal from "./Components/Categories/EditModal";

const dv = {
  category: "",
};

const key = "categories";

function App() {
  const [categories, setCategories] = useState(null);
  const [createModal, setCreateModal] = useState(null);
  const [store, setStore] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [deleteModal, setDeleteModal] = useState(null);
  const [destroy, setDestroy] = useState(null);
  const [editModal, setEditModal] = useState(null);
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
    setCategories(storage.lsRead(key));
  }, [refresh]);

  useEffect(() => {
    if (null === update) {
      return;
    }
    storage.lsEdit(key, update, update.id);
    setUpdate(null);
    setRefresh(Date.now());
  }, [update]);

  return (
    <div className="App">
      <h1 className="text-red-500">Movie crud</h1>
      <div>
        <button type="button" onClick={() => setCreateModal(dv)}>
          Add new category
        </button>
        <div>
          <CategoriesList
            categories={categories}
            setDeleteModal={setDeleteModal}
            setEditModal={setEditModal}
          />
        </div>
      </div>
      {createModal !== null && (
        <CreateModal
          createModal={createModal}
          setStore={setStore}
          setCreateModal={setCreateModal}
        />
      )}
      {deleteModal !== null && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          setDestroy={setDestroy}
        />
      )}
      {editModal !== null && (
        <EditModal
          setEditModal={setEditModal}
          editModal={editModal}
          setUpdate={setUpdate}
        />
      )}
    </div>
  );
}

export default App;
