import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const CategoriesList = ({ categories, setDeleteModal, setEditModal }) => {
  if (!categories || categories.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex gap-2 w-4/5 pl-7 py-6 rounded-md shadow-lg bg-teal-600 flex-wrap">
        {categories.map((c) => (
          <div
            key={c.id}
            className="flex gap-2 bg-slate-900 py-4 px-5 items-center rounded-lg"
          >
            <p className=" text-white font-bold w-28 uppercase mr-2">
              {c.category}
            </p>

            <button
              type="button"
              className="bg-teal-800 p-2 hover:bg-teal-900 transition-all rounded text-white"
              onClick={() => setDeleteModal(c)}
            >
              <MdDelete />
            </button>
            <button
              type="button"
              className="bg-cyan-700 p-2 hover:bg-cyan-900 transition-all rounded text-white"
              onClick={() => setEditModal(c)}
            >
              <MdEditSquare />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoriesList;
