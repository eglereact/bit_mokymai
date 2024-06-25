import Movie from "./Movie";

const MovieList = ({ movies, setDeleteMovieModal, setEditMovieModal }) => {
  if (null === movies) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap bg-teal-600 rounded-md gap-4 shadow-lg mb-6 p-6">
      {movies?.map((m) => (
        <Movie
          key={m.id}
          m={m}
          setDeleteMovieModal={setDeleteMovieModal}
          setEditMovieModal={setEditMovieModal}
        />
      ))}
    </div>
  );
};
export default MovieList;
