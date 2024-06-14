import { useState } from "react";
import Modal from "./Modal";
import ModalMore from "./ModalMore";
import ModalEdit from "./ModalEdit";

const Cat = ({ cat, removeCat, updateCat }) => {
  const { id, name, weight, img, available, color } = cat;
  const [modal, setModal] = useState(false);
  const [modalMore, setModalMore] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);
  const toggleModalMore = () => setModalMore((prev) => !prev);
  const toggleModalEdit = () => setModalEdit((prev) => !prev);
  const [tempValues, setTempValues] = useState({
    name,
    weight,
    available,
    color,
  });

  const handleChange = (e) => {
    const { name, value, type, id } = e.target;

    setTempValues((prevValues) => {
      if (type === "checkbox") {
        // Handle checkboxes for available
        if (name === "available") {
          return {
            ...prevValues,
            available: id,
          };
        }
      } else if (type === "select-one") {
        // Handle select dropdown for color
        return {
          ...prevValues,
          color: value,
        };
      } else {
        // Handle text inputs
        return {
          ...prevValues,
          [name]: value,
        };
      }
    });
  };

  const handleSave = () => {
    updateCat(
      id,
      tempValues.name,
      tempValues.weight,
      tempValues.available,
      tempValues.color
    );
    toggleModalEdit();
  };

  return (
    <div
      className={`flex w-64  h-52 ${
        available === "y"
          ? "border-green-300 border-8"
          : "border-yellow-200 border-8"
      }  justify-between bg-white items-center p-4 text-slate-800 rounded-lg shadow-lg`}
    >
      <div className="w-1/2">
        <img src={img} alt={name} className="w-16 h-12" />
      </div>
      <div className="w-1/2">
        <div>
          <p>
            Available {available || "n/a"} color: {color || "n/a"}
          </p>
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
