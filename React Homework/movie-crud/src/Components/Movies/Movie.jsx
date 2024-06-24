import { GiFilmProjector } from "react-icons/gi";

const Movie = ({ m, setEditMovieModal, setDeleteMovieModal }) => {
  return (
    <div>
      <div className="bg-slate-200 p-9">
        <div className=" w-32 h-40 relative bg-spring text-slate-900 rounded">
          <div className="flex flex-col items-center pt-4 ">
            <GiFilmProjector size={50} />
            <h1 className="capitalize font-bold text-xl">{m.title}</h1>
            <p className="text-sm">{m.year}</p>
          </div>
        </div>
        <h1>Title: {m.title}</h1>
        <p>Year: {m.year}</p>

        <div>
          {Object.keys(m.categories).map((category) => (
            <div key={category}>
              <span>
                {m.categories[category] &&
                  category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </div>
          ))}
        </div>
        <div>Rating {m.rating}</div>
        <div>
          <button
            type="button"
            className="bg-blue-300 p-2"
            onClick={() => setEditMovieModal(m)}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-red-300 p-2"
            onClick={() => setDeleteMovieModal(m)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movie;
