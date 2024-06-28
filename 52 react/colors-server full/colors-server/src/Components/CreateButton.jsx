import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CreateButton = () => {
  const { dv, setCreate } = useContext(DataContext);

  return (
    <div className="buttons">
      <button type="button" className="blue" onClick={() => setCreate(dv)}>
        Add new color
      </button>
    </div>
  );
};
export default CreateButton;
