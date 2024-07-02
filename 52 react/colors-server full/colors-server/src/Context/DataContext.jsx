import { createContext, useCallback, useState } from "react";
import useCreate from "../Hooks/useCreate";
import useRead from "../Hooks/useRead";
import { v4 as uuidv4 } from "uuid";
import useDelete from "../Hooks/useDelete";
import useEdit from "../Hooks/useEdit";

export const DataContext = createContext();

const dv = {
  shape: "",
  color: "#07cc44",
  range: 5,
};

const serverUrl = "http://localhost:3001/";

export const Data = ({ children }) => {
  const [msg, setMsg] = useState([]);

  const remMessage = useCallback((id) => {
    setMsg((msgs) => msgs.filter((m) => m.id !== id));
  }, []);

  const addMessage = useCallback(
    (m) => {
      const id = uuidv4();
      setMsg((msgs) => [{ ...m, id }, ...msgs]);
      setTimeout((_) => {
        remMessage(id);
      }, 5000);
    },
    [remMessage]
  );

  const { colors, dispatchColors } = useRead(serverUrl);
  const { create, setCreate, setStore } = useCreate(
    serverUrl,
    dispatchColors,
    addMessage
  );
  const { remove, setRemove, setDestroy } = useDelete(
    serverUrl,
    dispatchColors,
    addMessage
  );

  const { edit, setEdit, setUpdate } = useEdit(
    serverUrl,
    dispatchColors,
    addMessage
  );
  return (
    <DataContext.Provider
      value={{
        create,
        setCreate,
        setStore,
        dv,
        colors,
        remMessage,
        addMessage,
        msg,
        remove,
        setRemove,
        setDestroy,
        edit,
        setEdit,
        setUpdate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
