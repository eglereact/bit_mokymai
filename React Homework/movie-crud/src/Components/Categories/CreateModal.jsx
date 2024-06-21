import { useState } from "react";

const CreateModal = ({ setCreateModal, createModal, setStore }) => {
  const [category, setCategory] = useState(createModal.category);

  const handleCreate = () => {
    setStore({ category });
    setCreateModal(null);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal w-1/2">
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
              placeholder="category"
              className="bg-slate-200 outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <button
              type="button"
              className="bg-green-200 p-4"
              onClick={handleCreate}
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-200 p-4"
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
