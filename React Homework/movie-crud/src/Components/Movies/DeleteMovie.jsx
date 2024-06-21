const DeleteMovie = ({
  setDeleteMovieModal,
  deleteMovieModal,
  setDestroyMovie,
}) => {
  const handleDelete = () => {
    setDestroyMovie({ ...deleteMovieModal });
    setDeleteMovieModal(null);
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/3">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">
              Delete category
            </h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setDeleteMovieModal(null)}
            >
              X
            </div>
          </div>
          <div>
            <h1 className="text-xl">
              Do you want to{" "}
              <span className="text-red-600 font-bold">delete</span>
              <span className="capitalize font-bold">
                {deleteMovieModal.title}
              </span>
              category ?
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
              onClick={() => setDeleteMovieModal(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteMovie;
