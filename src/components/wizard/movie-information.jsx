import MovieComponent from "../landing/movie";

const MovieInformation = ({ date, movie }) => {
  return (
    <div class="flex flex-col gap-4 items-center self-center w-1/3">
      <MovieComponent movie={movie} />
      <div className="flex flex-col gap-2 items-center font-semibold">
        <span className="text-lg">{date}</span>
        <span className="text-lg">{movie.startTime}</span>
      </div>

      <div className="border p-4 rounded-lg bg-gray-100 w-3/4 max-h-72 overflow-y-auto">
        <div className="flex justify-between items-center my-1">
          <span className="text-sm text-gray-600">Genre: {movie.genre}</span>
          <span className="text-sm text-gray-600">Rating: {movie.rating}</span>
        </div>

        <strong className="text-xl font-semibold text-gray-700 mt-2">
          Description
        </strong>
        <p className="text-gray-600">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
