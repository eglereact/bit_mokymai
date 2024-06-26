import { useContext } from "react";
import { CatContext } from "../Context/CatCon";
import CatsList from "../Components/CatsList";
import Create from "../Components/Create";
import Delete from "../Components/Delete";
import Edit from "../Components/Edit";
import Messages from "../Components/Messages";
import { sortButtons } from "../Functions/sort";

const CatPage = () => {
  const {
    setCreateModal,
    dv,
    createModal,
    deleteModal,
    editModal,
    setSortCriteria,
    handleFilterChange,
  } = useContext(CatContext);
  return (
    <>
      <div>
        <button
          type="button"
          className="bg-green-600 p-4"
          onClick={() => setCreateModal(dv)}
        >
          Add a new cat
        </button>
        <div>
          {sortButtons.map((b) => (
            <button
              key={b.id}
              onClick={() => setSortCriteria(b.criteria)}
              className="bg-slate-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-700"
            >
              {b.title}
            </button>
          ))}
        </div>
        <div>
          <button
            className="bg-red-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-900"
            onClick={() => handleFilterChange("weightAbove", 10)}
          >
            Weight Above 10
          </button>
          <button
            className="bg-red-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-900"
            onClick={() => handleFilterChange("weightBelow", 10)}
          >
            Weight Bellow 10
          </button>
          <button
            className="bg-red-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-900"
            onClick={() => handleFilterChange("", "")}
          >
            Show All
          </button>
          <button
            className="bg-red-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-900"
            onClick={() => handleFilterChange("featuresIncludes", "calm")}
          >
            Calm
          </button>
        </div>
        <div>
          <CatsList />
        </div>
      </div>
      {createModal !== null && <Create />}
      {deleteModal !== null && <Delete />}
      {editModal !== null && <Edit />}
      <Messages />
    </>
  );
};
export default CatPage;
