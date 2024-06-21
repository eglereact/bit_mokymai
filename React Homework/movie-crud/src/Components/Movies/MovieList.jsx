const MovieList = ({ movies, setDeleteMovieModal, setEditMovieModal }) => {
  if (null === movies) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      {movies.map((c) => (
        <div key={c.id} className="bg-slate-200 p-9">
          <h1>Title: {c.title}</h1>
          <p>Year: {c.year}</p>

          <div>
            {Object.keys(c.categories).map((category) => (
              <div key={category}>
                <span>
                  {c.categories[category] &&
                    category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
            ))}
          </div>
          <div>Rating {c.rating}</div>
          <div>
            <button
              type="button"
              className="bg-blue-300 p-2"
              onClick={() => setEditMovieModal(c)}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-red-300 p-2"
              onClick={() => setDeleteMovieModal(c)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
