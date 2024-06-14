import { useState } from "react";
import Modal from "./Modal";
import ModalMore from "./ModalMore";
import ModalEdit from "./ModalEdit";

const Cat = ({ cat, removeCat, updateCat }) => {
  const { id, name, weight, img, gender } = cat;
  const [modal, setModal] = useState(false);
  const [modalMore, setModalMore] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);
  const toggleModalMore = () => setModalMore((prev) => !prev);
  const toggleModalEdit = () => setModalEdit((prev) => !prev);
  const [tempValues, setTempValues] = useState({ name, weight, gender });

  const handleChange = (e) => {
    const { name, value, type, id } = e.target;

    setTempValues((prevValues) => {
      if (type === "checkbox" && (name === "f" || name === "m")) {
        return {
          ...prevValues,
          gender: id,
        };
      }
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSave = () => {
    updateCat(id, tempValues.name, tempValues.weight, tempValues.gender);
    toggleModalEdit();
  };

  return (
    <div className="flex w-52  h-40 bg-white justify-between items-center p-4 text-slate-800 rounded-lg shadow-lg ">
      <div className="w-1/2">
        <img src={img} alt={name} className="w-16 h-12" />
      </div>
      <div className="w-1/2">
        <div>
          <p>Gender {gender || "n/a"}</p>
          <h1 className="font-bold capitalize">{name}</h1>
          <h2>
            <span className="font-bold">{weight}</span> kg
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="bg-red-600 w-16"
            onClick={toggleModal}
          >
            Delete
          </button>
          <Modal
            show={modal}
            removeCat={removeCat}
            cat={cat}
            close={toggleModal}
          />
          <button
            type="button"
            className="bg-cyan-600 w-16"
            onClick={toggleModalEdit}
          >
            Edit
          </button>
          {modalEdit && (
            <ModalEdit
              show={modalEdit}
              close={toggleModalEdit}
              handleChange={handleChange}
              handleSave={handleSave}
              tempValues={tempValues}
              cat={cat}
            />
          )}
          <button
            type="button"
            className="bg-emerald-600 w-16"
            onClick={toggleModalMore}
          >
            More
          </button>
          <ModalMore show={modalMore} close={toggleModalMore} cat={cat} />
        </div>
      </div>
    </div>
  );
};
export default Cat;
