const DeleteModal = ({ setDeleteModal, setDestroy, deleteModal }) => {
  const handleDelete = () => {
    setDestroy({ ...deleteModal });
    setDeleteModal(null);
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/4">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">
              Delete category
            </h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setDeleteModal(null)}
            >
              X
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-xl">
              Do you want to{" "}
              <span className="text-rose-500 font-bold"> delete </span>
              <span className="uppercase font-bold text-slate-800">
                {deleteModal.category}
              </span>{" "}
              category ?
            </h1>
          </div>
          <div className="flex gap-2 p-4">
            <button
              type="button"
              className="bg-rose-400 hover:bg-rose-500 transition-all shadow-lg text-white  font-bold capitalize rounded-md  py-3 px-4"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 transition-all shadow-lg text-white  font-bold capitalize rounded-md  py-3 px-4"
              onClick={() => setDeleteModal(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
