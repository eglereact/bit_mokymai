import { useState } from "react";

const EditMovie = ({ setUpdateMovie, editMovieModal, setEditMovieModal }) => {
  const [title, setTitle] = useState(editMovieModal.title);
  const [year, setYear] = useState(editMovieModal.year);
  const [categories, setCategories] = useState(editMovieModal.categories);
  const [rating, setRating] = useState(editMovieModal.rating);

  const handleEdit = () => {
    setUpdateMovie({
      ...editMovieModal,
      title,
      year,
      categories,
      rating,
    });
    setEditMovieModal(null);
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
        <div className="modal w-1/2">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">
              Create a new movie
            </h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setEditMovieModal(null)}
            >
              X
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div>
              <input
                type="text"
                placeholder="title"
                className="bg-slate-200 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="year"
                className="bg-slate-200 outline-none"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <div>
                <label>Categories:</label>
                {Object.keys(categories).map((category) => (
                  <div key={category}>
                    <label>
                      <input
                        type="checkbox"
                        checked={categories[category]}
                        onChange={() => handleCategories(category)}
                      />
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div>
                <label>Rating: {rating}</label>
              </div>
              <input
                type="range"
                placeholder="Rating"
                className="bg-slate-200 outline-none"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="10"
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-green-200 p-4"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-gray-200 p-4"
                onClick={() => setEditMovieModal(null)}
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
export default EditMovie;
