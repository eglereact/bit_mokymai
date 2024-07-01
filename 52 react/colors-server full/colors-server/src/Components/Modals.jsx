import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Create from "./Create";

const Modals = () => {
  const { create } = useContext(DataContext);

  if (create) {
    return <Create />;
  }
  return null;
};
export default Modals;
