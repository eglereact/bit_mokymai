const CategoriesList = ({ categories, setDeleteModal, setEditModal }) => {
  if (!categories || categories.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {categories.map((c) => (
        <div key={c.id} className="flex bg-slate-900">
          <p className=" text-white font-bold w-28 ">{c.category}</p>

          <button
            type="button"
            className="bg-red-300"
            onClick={() => setDeleteModal(c)}
          >
            Del
          </button>
          <button
            type="button"
            className="bg-blue-300"
            onClick={() => setEditModal(c)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};
export default CategoriesList;
