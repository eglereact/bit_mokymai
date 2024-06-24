import { useState } from "react";

const CreateModal = ({ setCreateModal, createModal, setStore, addMsg }) => {
  const [category, setCategory] = useState(createModal.category);
  const [errors, setErrors] = useState([]);

  const handleCreate = () => {
    setErrors([]);
    let hasError = false;
    if (!category) {
      addMsg({
        type: "danger",
        text: "Please add a category",
      });
      hasError = true;
      setErrors((e) => [...e, "category"]);
    }
    if (hasError) {
      return;
    }
    setStore({ category });
    setCreateModal(null);
  };

  const removeError = (error) => {
    setErrors((e) => e.filter((err) => err !== error));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal w-1/4">
        <div className="flex justify-between border-b-2 p-4 border-slate-200">
          <h1 className="text-2xl text-slate-800 font-bold">
            Create a new movie category
          </h1>
          <div
            className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
            onClick={() => setCreateModal(null)}
          >
            X
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <div>
            <input
              type="text"
              placeholder="add a category"
              className={`bg-slate-200 mb-3 w-full rounded-md capitalize outline-none px-4 py-2 ${
                errors.includes("category") ? "border-2 border-rose-500" : ""
              }`}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (e.target.value) {
                  removeError("category");
                }
              }}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white  font-bold capitalize rounded-md py-3 px-4"
              onClick={handleCreate}
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 transition-all shadow-lg text-white  font-bold capitalize rounded-md  py-3 px-4"
              onClick={() => setCreateModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateModal;
