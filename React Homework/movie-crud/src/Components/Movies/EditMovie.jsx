import { useState, useEffect } from "react";

const EditMovie = ({
  setUpdateMovie,
  editMovieModal,
  setEditMovieModal,
  addMsg,
}) => {
  const [title, setTitle] = useState(editMovieModal.title);
  const [year, setYear] = useState(editMovieModal.year);
  const [categories, setCategories] = useState(editMovieModal.categories);
  const [rating, setRating] = useState(editMovieModal.rating);
  const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   setTitle(editMovieModal.title);
  //   setYear(editMovieModal.year);
  //   setCategories(editMovieModal.categories);
  //   setRating(editMovieModal.rating);
  //   console.log("Edit Movie Modal Updated: ", editMovieModal);
  // }, [editMovieModal]);

  const isAtLeastOneTrue = Object.values(categories).some((value) => value);

  const handleEdit = () => {
    setErrors([]);
    let hasError = false;
    if (!title) {
      addMsg({
        type: "danger",
        text: "Please add a title",
      });
      hasError = true;
      setErrors((e) => [...e, "title"]);
    }
    if (!year) {
      addMsg({
        type: "danger",
        text: "Please add a year",
      });
      hasError = true;
      setErrors((e) => [...e, "year"]);
    }
    if (!isAtLeastOneTrue) {
      addMsg({
        type: "danger",
        text: "Please select a category",
      });
      hasError = true;
      setErrors((e) => [...e, "category"]);
    }
    if (hasError) {
      return;
    }

    setUpdateMovie({
      ...editMovieModal,
      title,
      year,
      categories,
      rating,
    });
    setEditMovieModal(null);
  };

  const removeError = (error) => {
    setErrors((e) => e.filter((err) => err !== error));
  };

  const handleCategories = (category) => {
    const newCategories = {
      ...categories,
      [category]: !categories[category],
    };

    setCategories(newCategories);

    const isAtLeastOneTrue = Object.values(newCategories).some(
      (value) => value
    );

    if (isAtLeastOneTrue) {
      removeError("category");
    }
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/3">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">Edit movie</h1>
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
                className={`bg-slate-200 mb-3 w-1/2 rounded-md capitalize outline-none px-4 py-2 ${
                  errors.includes("title") ? "border-2 border-rose-500" : ""
                }`}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (e.target.value) {
                    removeError("title");
                  }
                }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="year"
                className={`bg-slate-200 mb-3 w-1/2 rounded-md capitalize outline-none px-4 py-2 ${
                  errors.includes("year") ? "border-2 border-rose-500" : ""
                }`}
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  if (e.target.value) {
                    removeError("year");
                  }
                }}
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
                {errors.includes("category") && (
                  <p className="text-rose-500">No categories are selected.</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label className="text-slate-800">Rating: </label>
                <span className="font-bold text-white bg-teal-600 w-7 h-7 flex justify-center items-center rounded">
                  {rating}
                </span>
              </div>
              <input
                type="range"
                placeholder="Rating"
                className="outline-none w-full accent-teal-600 range pr-6"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="10"
              />
            </div>
            <div className="flex gap-2 py-2">
              <button
                type="button"
                className="bg-teal-600 hover:bg-teal-700 transition-all shadow-lg text-white font-bold capitalize rounded-md py-3 px-4"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 transition-all shadow-lg text-white font-bold capitalize rounded-md py-3 px-4"
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
