import { IoClose } from "react-icons/io5";
const ModalEdit = ({ show, close, tempValues, handleChange, handleSave }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal w-1/3">
        <div className="flex text-slate-900 justify-between items-center  mb-8">
          <h3 className="capitalize font-bold  text-2xl">edit cat</h3>
          <div
            onClick={() => close()}
            className="w-8 h-8 cursor-pointer hover:text-slate-600"
          >
            <span>
              <IoClose fontSize={30} />
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[300px] gap-5">
          <input
            type="text"
            name="name"
            value={tempValues.name}
            onChange={handleChange}
            className="outline-none p-2 w-full rounded-lg border-b-2 border-slate-900 bg-slate-100"
          />
          <input
            type="text"
            name="weight"
            value={tempValues.weight}
            onChange={handleChange}
            className="outline-none p-2 w-full rounded-lg border-b-2 border-slate-900 bg-slate-100"
          />
          <div>
            <div
              className={`${
                tempValues.available === "y" &&
                "bg-slate-900 text-white rounded-lg"
              } p-1`}
            >
              <input
                type="checkbox"
                name="available"
                id="y"
                checked={tempValues.available === "y"}
                onChange={handleChange}
              />{" "}
              <label className="cursor-pointer" htmlFor="y">
                Looking for home
              </label>
            </div>
            <div
              className={`${
                tempValues.available === "n" &&
                "bg-slate-900 text-white rounded-lg"
              } p-1`}
            >
              <input
                type="checkbox"
                name="available"
                id="n"
                checked={tempValues.available === "n"}
                onChange={handleChange}
              />{" "}
              <label className="cursor-pointer" htmlFor="n">
                Adopted
              </label>
            </div>
          </div>
          <div className="flex my-5">
            <label htmlFor="color" className="w-32 font-bold">
              Main color:
            </label>
            <select
              name="color"
              value={tempValues.color}
              onChange={handleChange}
              className="w-full bg-slate-900 text-white px-2 rounded-lg capitalize cursor-pointer"
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="orange">Orange</option>
              <option value="gray">Gray</option>
              <option value="tortoiseshell">tortoiseshell</option>
            </select>
          </div>
          <div className="flex my-5 gap-5">
            <button
              type="button"
              className="bg-slate-900 w-full rounded-lg p-2 font-bold hover:bg-slate-950 transition-all text-white"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-slate-100 hover:bg-slate-200 font-bold transition-all rounded-lg"
              onClick={() => close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
