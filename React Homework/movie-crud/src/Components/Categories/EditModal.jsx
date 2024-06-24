import { useState } from "react";

const EditModal = ({ editModal, setEditModal, setUpdate }) => {
  const [category, setCategory] = useState(editModal.category);

  const handleEdit = () => {
    setUpdate({
      ...editModal,
      category,
    });
    setEditModal(null);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal w-1/4">
        <div className="flex justify-between border-b-2 p-4 border-slate-200">
          <h1 className="text-2xl text-slate-800 font-bold">
            Edit movie category
          </h1>
          <div
            className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
            onClick={() => setEditModal(null)}
          >
            X
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <div>
            <input
              type="text"
              placeholder="category"
              className="bg-slate-200 mb-3 w-full rounded-md capitalize outline-none px-4 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white  font-bold capitalize rounded-md py-3 px-4"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 transition-all shadow-lg text-white  font-bold capitalize rounded-md py-3 px-4"
              onClick={() => setEditModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
