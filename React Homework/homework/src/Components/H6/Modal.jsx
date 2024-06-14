import { IoClose } from "react-icons/io5";
const Modal = ({ show, removeCat, cat, close }) => {
  if (!show) {
    return null;
  }
  const { id, name } = cat;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="flex text-slate-900 mb-10">
          <h2 className="text-2xl mr-5">
            Are you sure you want to delete{" "}
            <span className="font-bold uppercase">{name}'s</span> card?
          </h2>
          <div
            onClick={() => close()}
            className=" w-8 h-8 cursor-pointer hover:text-slate-600"
          >
            <IoClose fontSize={30} />
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => close()}
            className="bg-slate-100 w-full hover:bg-slate-200 font-bold transition-all rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => removeCat(id)}
            className="bg-slate-900 w-full rounded-lg p-2 font-bold hover:bg-slate-950 transition-all text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
