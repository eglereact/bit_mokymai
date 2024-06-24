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
        <div className="modal w-1/4">
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
            <h1 className="text-xl p-4">
              Do you want to{" "}
              <span className="text-rose-500 font-bold"> delete </span>
              movie
              <span className="uppercase font-bold">
                "{deleteMovieModal.title}"
              </span>
              ?
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
