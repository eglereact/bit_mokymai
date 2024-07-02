import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Create from "./Create";
import Delete from "./Delete";
import Edit from "./Edit";

const Modals = () => {
  const { create, remove, edit } = useContext(DataContext);

  if (create) {
    return <Create />;
  }

  if (remove) {
    return <Delete />;
  }

  if (edit) {
    return <Edit />;
  }

  return null;
};
export default Modals;
