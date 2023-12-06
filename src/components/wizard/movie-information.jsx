import MovieComponent from "../landing/movie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSessionContext } from "../../contexts/SessionContext";
import { handleCancelSwap } from "../../lib/helper";

const MovieInformation = ({ movie }) => {
  const router = useRouter();
  const { state, dispatch } = useSessionContext();
  const swapInProgress = state.scannedTicket;

  useEffect(() => {
    if (!movie) {
      router.replace("/");
      console.log("Movie not found");
    }
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <div class="flex flex-col gap-4 items-center self-center w-1/3 select-none">
      <MovieComponent movie={movie} isInfo />
      <div className="flex flex-col gap-2 items-center font-semibold">
        {movie.date && movie.startTime && (
          <>
            <span className="text-lg">{movie.date}</span>
            <span className="text-lg">{movie.startTime}</span>
          </>
        )}
      </div>

      <div className="border p-4 rounded-lg bg-gray-100 w-3/4 max-h-72 overflow-y-auto">
        <div className="flex justify-between items-center my-1">
          <span className="text-sm text-gray-600">Genre: {movie.genre}</span>
          <span className="text-sm text-gray-600">Rating: {movie.rating}</span>
        </div>
        {/* <strong className="text-xl font-semibold text-gray-700 mt-2">
          Description
          </strong>
        <p className="text-gray-600">{movie.description}</p> */}
      </div>
      {swapInProgress && (
        <button
          onClick={() => handleCancelSwap(dispatch)}
          className="bg-red-600 text-white text-base py-2 px-6 rounded-full max-w-full align-middle hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300 mx-auto mt-2"
        >
          <Link href="/">Cancel Swap</Link>
        </button>
      )}
    </div>
  );
};

export default MovieInformation;
