import { IoClose } from "react-icons/io5";
const colors = ["black", "white", "grey", "orange", "tortoiseshell"];

const CreateCat = ({
  show,
  close,
  cat,
  handleChange,
  handleSubmit,
  handleImageChange,
  images,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal w-1/3">
        <div className="flex text-slate-900 justify-between items-center  mb-8">
          <h3 className="capitalize font-bold  text-2xl">create new cat</h3>
          <div
            onClick={() => close()}
            className="w-8 h-8 cursor-pointer hover:text-slate-600"
          >
            <span>
              <IoClose fontSize={30} />
            </span>
          </div>
        </div>

        <div className="flex ">
          <div className="flex flex-col w-[300px] gap-5">
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={cat.name}
              className="outline-none p-2 w-full rounded-lg border-b-2 border-slate-900 bg-slate-100"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter weight"
              name="weight"
              value={cat.weight}
              className="outline-none p-2 w-full rounded-lg border-b-2 border-slate-900 bg-slate-100"
              onChange={handleChange}
            />
            <div>
              <div>
                <div
                  className={`${
                    cat.available === "y" &&
                    "bg-slate-900 text-white rounded-lg"
                  } p-1`}
                >
                  <input
                    type="checkbox"
                    name="available"
                    id="y"
                    checked={cat.available === "y"}
                    onChange={handleChange}
                  />{" "}
                  <label className="cursor-pointer" htmlFor="y">
                    Looking for home
                  </label>
                </div>
                <div
                  className={`${
                    cat.available === "n" &&
                    "bg-slate-900 text-white rounded-lg"
                  } p-1`}
                >
                  <input
                    type="checkbox"
                    name="available"
                    id="n"
                    checked={cat.available === "n"}
                    onChange={handleChange}
                  />{" "}
                  <label className="cursor-pointer" htmlFor="n">
                    Adopted
                  </label>
                </div>
              </div>
              <div className="flex my-5">
                <p className="w-32 font-bold">Main color:</p>
                <select
                  value={cat.color}
                  onChange={handleChange}
                  className="w-full bg-slate-900 text-white px-2 rounded-lg capitalize cursor-pointer"
                >
                  {colors.map((a, i) => (
                    <option key={i} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 justify-center items-center">
            {images.map((url, index) => (
              <div
                key={index}
                className={`${
                  cat.image === url
                    ? "border-2 border-slate-900 p-2 rounded-lg bg-gray-200 cursor-pointer"
                    : "border-2 border-transparent p-2 cursor-pointer"
                }`}
              >
                <input
                  type="checkbox"
                  name="image"
                  id={url}
                  checked={cat.image === url}
                  onChange={handleImageChange}
                />
                <label htmlFor={url}>
                  <img className="w-16 cursor-pointer" src={url} />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex my-5 gap-5">
          <button
            type="submit"
            className="bg-slate-900 w-full rounded-lg p-2 font-bold hover:bg-slate-950 transition-all text-white"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            onClick={() => close()}
            className="bg-slate-100 hover:bg-slate-200 font-bold transition-all rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateCat;
