import { createContext, useCallback, useEffect, useState } from "react";
import * as storage from "../Functions/ls";
import { v4 as uuidv4 } from "uuid";

export const CatContext = createContext();

const dv = {
  name: "",
  weight: "",
  image: "/src/images/bandit.png",
  features: {
    curious: false,
    gentle: false,
    friendly: false,
    playful: false,
    cautious: false,
    calm: false,
  },
  age: "0-1",
};

const key = "cats";

export default function CatCon({ children }) {
  const [cats, setCats] = useState(null);
  const [createModal, setCreateModal] = useState(null);
  const [store, setStore] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());
  const [deleteModal, setDeleteModal] = useState(null);
  const [destroy, setDestroy] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [update, setUpdate] = useState(null);
  const [msg, setMsg] = useState([]);

  const [sortCriteria, setSortCriteria] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({
    criteria: "",
    value: "",
  });
  const [filteredCats, setFilteredCats] = useState(cats);

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
    if (null === store) {
      return;
    }
    storage.lsCreate(key, store);
    setStore(null);
    addMsg({
      title: "Cats",
      type: "success",
      text: "Cat was added successfully.",
    });
    setRefresh(Date.now());
  }, [store, addMsg]);

  useEffect(() => {
    setCats(storage.lsRead(key));
  }, [refresh]);

  useEffect(() => {
    if (null === destroy) {
      return;
    }
    storage.lsDelete(key, destroy.id);
    setDestroy(null);
    addMsg({
      title: "Cats",
      type: "success",
      text: "Cat was deleted successfully.",
    });
    setRefresh(Date.now());
  }, [destroy, addMsg]);

  useEffect(() => {
    if (null === update) {
      return;
    }
    storage.lsEdit(key, update, update.id);
    setUpdate(null);
    addMsg({
      title: "Cat",
      type: "success",
      text: "Cat was edited successfully.",
    });
    setRefresh(Date.now());
  }, [update, addMsg]);

  const sortCats = (cats, criteria) => {
    switch (criteria) {
      case "weightAsc":
        return cats.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
      case "weightDesc":
        return cats.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
      case "nameAsc":
        return cats.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return cats.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return cats;
    }
  };

  const filterCats = (cats, criteria, value) => {
    if (!criteria) {
      return cats;
    }
    switch (criteria) {
      case "weightAbove":
        return cats.filter((cat) => parseFloat(cat.weight) > parseFloat(value));
      case "weightBelow":
        return cats.filter((cat) => parseFloat(cat.weight) < parseFloat(value));
      case "featuresIncludes":
        return cats.filter((cat) => cat.features[value] === true);
      default:
        return cats;
    }
  };

  console.log(cats);
  useEffect(() => {
    let result = filterCats(
      cats,
      filterCriteria.criteria,
      filterCriteria.value
    );
    result = sortCats(result, sortCriteria);
    setFilteredCats(result);
  }, [filterCriteria, sortCriteria, cats]);

  const handleFilterChange = (criteria, value) => {
    setFilterCriteria({ criteria, value });
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <CatContext.Provider
      value={{
        dv,
        createModal,
        deleteModal,
        editModal,
        setCreateModal,
        setStore,
        cats,
        setDeleteModal,
        setEditModal,
        deleteModal,
        setDestroy,
        setUpdate,
        msg,
        removeMsg,
        sortCriteria,
        setSortCriteria,
        handleFilterChange,
        filteredCats,
      }}
    >
      {children}
    </CatContext.Provider>
  );
}
