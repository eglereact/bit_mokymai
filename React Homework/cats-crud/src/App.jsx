import { useCallback, useContext, useEffect, useState } from "react";
import "./App.css";
import Create from "./Components/Create";
import CatsList from "./Components/CatsList";
// import * as storage from "./Functions/ls";
import Delete from "./Components/Delete";
import Edit from "./Components/Edit";
// import { v4 as uuidv4 } from "uuid";
import Messages from "./Components/Messages";
import CatCon, { CatContext } from "./Context/CatCon";
import CatPage from "./Pages/CatPage";

// const dv = {
//   name: "",
//   weight: "",
//   image: "/src/images/bandit.png",
//   features: {
//     curious: false,
//     gentle: false,
//     friendly: false,
//     playful: false,
//     cautious: false,
//     calm: false,
//   },
//   age: "0-1",
// };

// const key = "cats";

function App() {
  // const [cats, setCats] = useState(null);
  // const [createModal, setCreateModal] = useState(null);
  // const [store, setStore] = useState(null);
  // const [refresh, setRefresh] = useState(Date.now());
  // const [deleteModal, setDeleteModal] = useState(null);
  // const [destroy, setDestroy] = useState(null);
  // const [editModal, setEditModal] = useState(null);
  // const [update, setUpdate] = useState(null);
  // const [msg, setMsg] = useState([]);

  // const removeMsg = useCallback((id) => {
  //   setMsg((msgs) => msgs.filter((m) => m.id !== id));
  // }, []);

  // const addMsg = useCallback(
  //   (m) => {
  //     const id = uuidv4();
  //     setMsg((msgs) => [{ ...m, id }, ...msgs]);
  //     setTimeout(() => {
  //       removeMsg(id);
  //     }, 5000);
  //   },
  //   [removeMsg]
  // );

  // useEffect(() => {
  //   if (null === store) {
  //     return;
  //   }
  //   storage.lsCreate(key, store);
  //   setStore(null);
  //   addMsg({
  //     title: "Cats",
  //     type: "success",
  //     text: "Cat was added successfully.",
  //   });
  //   setRefresh(Date.now());
  // }, [store, addMsg]);

  // useEffect(() => {
  //   setCats(storage.lsRead(key));
  // }, [refresh]);

  // useEffect(() => {
  //   if (null === destroy) {
  //     return;
  //   }
  //   storage.lsDelete(key, destroy.id);
  //   setDestroy(null);
  //   addMsg({
  //     title: "Cats",
  //     type: "success",
  //     text: "Cat was deleted successfully.",
  //   });
  //   setRefresh(Date.now());
  // }, [destroy, addMsg]);

  // useEffect(() => {
  //   if (null === update) {
  //     return;
  //   }
  //   storage.lsEdit(key, update, update.id);
  //   setUpdate(null);
  //   addMsg({
  //     title: "Cat",
  //     type: "success",
  //     text: "Cat was edited successfully.",
  //   });
  //   setRefresh(Date.now());
  // }, [update, addMsg]);

  return (
    <CatCon>
      <CatPage />
      {/* <div>
        <button
          type="button"
          className="bg-green-600 p-4"
          onClick={() => setCreateModal(dv)}
        >
          Add a new cat
        </button>
        <div>
          <CatsList
            cats={cats}
            setDeleteModal={setDeleteModal}
            setEditModal={setEditModal}
          />
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
      {editModal !== null && (
        <Edit
          setEditModal={setEditModal}
          editModal={editModal}
          setUpdate={setUpdate}
        />
      )}
      <Messages msg={msg} removeMsg={removeMsg} /> */}
    </CatCon>
  );
}

export default App;
