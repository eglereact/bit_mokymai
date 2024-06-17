import { IoClose } from "react-icons/io5";

const ModalMore = ({ show, cat, close }) => {
  if (!show) {
    return null;
  }
  const { id, name, weight, image, available, color } = cat;
  return (
    <div className="modal-backdrop">
      <div className="modal w-1/4">
        <div className="flex text-slate-900 justify-between items-center  mb-8">
          <h3 className="capitalize font-bold  text-3xl">{name}</h3>
          <div
            onClick={() => close()}
            className="w-8 h-8 cursor-pointer hover:text-slate-600"
          >
            <span>
              <IoClose fontSize={30} />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-b-2  border-slate-900 rounded-lg">
          <div className="flex justify-center items-center w-1/2">
            <img src={image} alt={name} className="w-24 h-26" />
          </div>
          <div className="capitalize p-4 bg-slate-200 rounded-r-lg">
            <h1>
              <span className="font-bold">Cat Id:</span> {id}
            </h1>
            <h1>
              <span className="font-bold">Name: </span>
              {name}
            </h1>
            <h1>
              <span className="font-bold">Weight: </span>
              {weight} kg
            </h1>
            <h1>
              <span className="font-bold">Status: </span>
              {available === "y" ? "Looking for home" : "Adopted"}
            </h1>
            <h1>
              <span className="font-bold">Main Color: </span>
              {color}
            </h1>
          </div>
        </div>
        <button
          onClick={() => close()}
          className="bg-slate-100 hover:bg-slate-200 font-bold transition-all rounded-lg w-full mt-6 py-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalMore;
