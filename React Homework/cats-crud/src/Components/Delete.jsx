const Delete = ({ setDeleteModal, deleteModal, setDestroy }) => {
  const handleDelete = () => {
    setDestroy({ ...deleteModal });
    setDeleteModal(null);
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/3">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">Delete cat</h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setDeleteModal(null)}
            >
              X
            </div>
          </div>
          <div>
            <h1 className="text-xl">
              Do you want to{" "}
              <span className="text-red-600 font-bold">delete</span> the card of
              <span className="capitalize font-bold"> {deleteModal.name}</span>?
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="bg-red-200 p-4"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="bg-gray-200 p-4"
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
export default Delete;
