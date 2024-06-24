import { useState } from "react";

const CreateMovieModal = ({
  createMovieModal,
  setStoreMovie,
  setCreateMovieModal,
}) => {
  const [title, setTitle] = useState(createMovieModal.title);
  const [year, setYear] = useState(createMovieModal.year);
  const [categories, setCategories] = useState(createMovieModal.categories);
  const [rating, setRating] = useState(createMovieModal.rating);

  const handleCreate = () => {
    setStoreMovie({ title, year, categories, rating });
    setCreateMovieModal(null);
  };

  const handleCategories = (category) => {
    setCategories({
      ...categories,
      [category]: !categories[category],
    });
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/3">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">
              Create a new movie
            </h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setCreateMovieModal(null)}
            >
              X
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div>
              <input
                type="text"
                placeholder="title"
                className="bg-slate-200 mb-3 w-1/2 rounded-md capitalize outline-none px-4 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="year"
                className="bg-slate-200 mb-3 w-1/2 rounded-md capitalize outline-none px-4 py-2"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <div>
                <div className="grid grid-cols-3 gap-4">
                  {Object.keys(categories).map((category) => (
                    <div key={category}>
                      <label
                        className={`capitalize font-bold ${
                          categories[category]
                            ? "text-teal-600 "
                            : "text-slate-800"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="mr-1 accent-teal-600"
                          checked={categories[category]}
                          onChange={() => handleCategories(category)}
                        />
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label>Rating: </label>
                <span className="font-bold text-white bg-teal-600 w-7 h-7 flex justify-center items-center  rounded">
                  {rating}
                </span>
              </div>
              <input
                type="range"
                placeholder="Rating"
                className=" outline-none w-full accent-teal-600 range pr-6"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="10"
              />
            </div>
            <div className="flex gap-2 py-2">
              <button
                type="button"
                className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white  font-bold capitalize rounded-md py-3 px-4"
                onClick={handleCreate}
              >
                Add
              </button>
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 transition-all shadow-lg text-white  font-bold capitalize rounded-md  py-3 px-4"
                onClick={() => setCreateMovieModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateMovieModal;
