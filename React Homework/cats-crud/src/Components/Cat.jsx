import { useContext } from "react";
import { CatContext } from "../Context/CatCon";

const Cat = ({ c }) => {
  const { setDeleteModal, setEditModal } = useContext(CatContext);

  return (
    <div key={c.id} className="bg-slate-200 p-9">
      <h1>Name: {c.name}</h1>
      <p>Weight: {c.weight} kg</p>
      <p>Age: {c.age} years</p>
      <div>
        <img src={c.image} alt={c.name} />
      </div>
      <div>
        {Object.keys(c.features).map((feature) => (
          <div key={feature}>
            <span>
              {c.features[feature] &&
                feature.charAt(0).toUpperCase() + feature.slice(1)}
            </span>
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          className="bg-blue-300 p-2"
          onClick={() => setEditModal(c)}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-300 p-2"
          onClick={() => setDeleteModal(c)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Cat;
