import { useCallback, useEffect, useState } from "react";
import "./App.css";
import CreateModal from "./Components/Categories/CreateModal";
import * as storage from "./Functions/ls";
import CategoriesList from "./Components/Categories/CategoriesList";
import DeleteModal from "./Components/Categories/DeleteModal";
import EditModal from "./Components/Categories/EditModal";
import CreateMovieModal from "./Components/Movies/CreateMovieModal";
import MovieList from "./Components/Movies/MovieList";
import DeleteMovie from "./Components/Movies/DeleteMovie";
import EditMovie from "./Components/Movies/EditMovie";
import Messages from "./Components/Messages";
import { v4 as uuidv4 } from "uuid";

const dv = {
  category: "",
};

const key = "categories";
const movieKey = "movies";

function App() {
  const [route, setRoute] = useState(() => {
    return localStorage.getItem("route") || "categories";
  });
  const [categories, setCategories] = useState(null);
  const [createModal, setCreateModal] = useState(null);
  const [store, setStore] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [deleteModal, setDeleteModal] = useState(null);
  const [destroy, setDestroy] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [update, setUpdate] = useState(null);

  const [movies, setMovies] = useState(null);
  const [createMovieModal, setCreateMovieModal] = useState(null);
  const [storeMovie, setStoreMovie] = useState(null);
  const [deleteMovieModal, setDeleteMovieModal] = useState(null);
  const [destroyMovie, setDestroyMovie] = useState(null);
  const [editMovieModal, setEditMovieModal] = useState(null);
  const [updateMovie, setUpdateMovie] = useState(null);

  const [msg, setMsg] = useState([]);

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

  useEffect(() => {
    setCategories(storage.lsRead(key));
    setMovies(storage.lsRead(movieKey));
  }, [refresh]);

  useEffect(() => {
    localStorage.setItem("route", route);
  }, [route]);

  const mapCategoriesToFalse = (categoriesArray) => {
    if (!categoriesArray) {
      return {};
    }
    const categoriesObject = {};
    categoriesArray.forEach(({ category }) => {
      categoriesObject[category] = false;
    });
    return categoriesObject;
  };

  const movieDv = {
    title: "",
    year: "",
    categories: mapCategoriesToFalse(categories),
    rating: 1,
  };

  useEffect(() => {
    if (null === store) {
      return;
    }

    storage.lsCreate(key, store);
    addMsg({
      type: "success",
      text: "Category was added successfully.",
    });
    setStore(null);
    setRefresh(Date.now());
  }, [store, addMsg]);

  useEffect(() => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(key, destroy.id);
    addMsg({
      type: "success",
      text: `Category was deleted successfully.`,
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
      type: "success",
      text: `Category  was updated successfully.`,
    });
    setUpdate(null);
    setRefresh(Date.now());
  }, [update, addMsg]);

  useEffect(() => {
    if (null === storeMovie) {
      return;
    }
    storage.lsCreate(movieKey, storeMovie);
    addMsg({
      type: "success",
      text: `Movie was created successfully.`,
    });
    setStoreMovie(null);
    setRefresh(Date.now());
  }, [storeMovie, addMsg]);

  useEffect(() => {
    if (null === destroyMovie) {
      return;
    }
    storage.lsDelete(movieKey, destroyMovie.id);
    addMsg({
      type: "success",
      text: `Movie was deleted successfully.`,
    });
    setDestroyMovie(null);
    setRefresh(Date.now());
  }, [destroyMovie, addMsg]);

  useEffect(() => {
    if (null === updateMovie) {
      return;
    }
    storage.lsEdit(movieKey, updateMovie, updateMovie.id);
    addMsg({
      type: "success",
      text: `Movie was updated successfully.`,
    });
    setUpdateMovie(null);
    setRefresh(Date.now());
  }, [updateMovie, addMsg]);

  if (route === "categories") {
    return (
      <div className="App">
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-4/5  flex gap-4">
            <button
              type="button"
              className="bg-slate-800 hover:bg-slate-900 shadow-lg text-white font-bold capitalize rounded-md p-4"
              onClick={() => setCreateModal(dv)}
            >
              Add new category
            </button>
            <button
              type="button"
              className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white  font-bold capitalize rounded-md p-4"
              onClick={() => setRoute("movies")}
            >
              Go to movies
            </button>
          </div>
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
        <Messages msg={msg} removeMsg={removeMsg} />
      </div>
    );
  }
  if (route === "movies") {
    return (
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="w-4/5">
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-slate-800 hover:bg-slate-900 shadow-lg text-white font-bold capitalize rounded-md p-4"
              onClick={() => setCreateMovieModal(movieDv)}
            >
              Add new movie
            </button>
            <button
              type="button"
              className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white  font-bold capitalize rounded-md p-4"
              onClick={() => setRoute("categories")}
            >
              Go to categories
            </button>
          </div>
          <h1 className="my-6 text-4xl font-bold text-slate-800">Movie list</h1>
          <div>
            <MovieList
              movies={movies}
              setDeleteMovieModal={setDeleteMovieModal}
              setEditMovieModal={setEditMovieModal}
            />
          </div>
        </div>
        {createMovieModal !== null && (
          <CreateMovieModal
            createMovieModal={createMovieModal}
            setStoreMovie={setStoreMovie}
            setCreateMovieModal={setCreateMovieModal}
          />
        )}
        {deleteMovieModal !== null && (
          <DeleteMovie
            setDeleteMovieModal={setDeleteMovieModal}
            deleteMovieModal={deleteMovieModal}
            setDestroyMovie={setDestroyMovie}
          />
        )}
        {editMovieModal !== null && (
          <EditMovie
            setEditMovieModal={setEditMovieModal}
            editMovieModal={editMovieModal}
            setUpdateMovie={setUpdateMovie}
          />
        )}
        <Messages msg={msg} removeMsg={removeMsg} />
      </div>
    );
  }
}

export default App;
