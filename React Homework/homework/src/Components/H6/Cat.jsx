import { useState } from "react";
import Modal from "./Modal";
import ModalMore from "./ModalMore";
import ModalEdit from "./ModalEdit";
import { CiCircleMore } from "react-icons/ci";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

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
      }  justify-between bg-white flex-col items-center p-4 text-slate-800 rounded-lg shadow-lg`}
    >
      <div className="w-ful flex justify-center items-center">
        <img src={img} alt={name} className="w-20 h-16" />
      </div>
      <div className="w-full">
        <div className="flex justify-between my-3 items-center">
          <h1 className="font-bold capitalize text-2xl">{name}</h1>
          <h2>
            <span className="font-bold">{weight}</span> kg
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            title="Learn More"
            type="button"
            className="bg-slate-300 w-auto p-2 rounded-full hover:bg-slate-900 hover:text-white transition-all"
            onClick={toggleModalMore}
          >
            <CiCircleMore fontSize={30} />
          </button>
          <ModalMore show={modalMore} close={toggleModalMore} cat={cat} />
          <button
            type="button"
            title="Edit"
            className="bg-blue-300 w-auto p-2 rounded-full hover:bg-slate-900 hover:text-white transition-all"
            onClick={toggleModalEdit}
          >
            <RiEditCircleLine fontSize={30} />
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
            title="Delete"
            className="bg-red-300 w-auto p-2 rounded-full hover:bg-slate-900 hover:text-white transition-all"
            onClick={toggleModal}
          >
            <IoIosRemoveCircleOutline fontSize={30} />
          </button>
          <Modal
            show={modal}
            removeCat={removeCat}
            cat={cat}
            close={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};
export default Cat;
