import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

const Movie = ({ m, setEditMovieModal, setDeleteMovieModal }) => {
  return (
    <div>
      <div className="bg-slate-900 text-white w-[280px] rounded-xl min-h-[400px] p-4 flex flex-col ">
        <div className="flex text-lg ">
          <p className="font-bold text-teal-600 pr-1">Title:</p>{" "}
          <p className="capitalize">{m.title}</p>
        </div>

        <div className="flex text-lg">
          <p className="font-bold text-teal-600 pr-1">Year:</p>{" "}
          <p className=" capitalize">{m.year}</p>
        </div>

        <div className="flex ">
          <div className="flex text-lg flex-wrap gap-1">
            <label className="capitalize font-bold text-teal-600">
              Genres:
            </label>
            {Object.keys(m.categories).map((category) => (
              <div key={category}>
                <span className="text-base">
                  {m.categories[category] && (
                    <>
                      <span className="text-teal-600"> • </span>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex text-lg">
          <p className="font-bold text-teal-600 pr-1">Rating:</p>{" "}
          <div>
            {Array(+m.rating)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
            {`(${m.rating})`}
          </div>
        </div>
        <div className="py-4 flex gap-2">
          <button
            type="button"
            className="bg-cyan-700 p-2 hover:bg-cyan-900 transition-all rounded text-white"
            onClick={() => setEditMovieModal(m)}
          >
            <MdEditSquare />
          </button>
          <button
            type="button"
            className="bg-teal-800 p-2 hover:bg-teal-900 transition-all rounded text-white"
            onClick={() => setDeleteMovieModal(m)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Movie;
