import { createContext } from "react";
import useCreate from "../Hooks/useCreate";

export const DataContext = createContext();

const dv = {
  shape: "",
  color: "#f267d8",
  range: 5,
};

const server_url = "http://localhost:3001/";

export const Data = ({ children }) => {
  const { create, setCreate, setStore } = useCreate(server_url);

  return (
    <DataContext.Provider value={{ create, setCreate, setStore, dv }}>
      {children}
    </DataContext.Provider>
  );
};
