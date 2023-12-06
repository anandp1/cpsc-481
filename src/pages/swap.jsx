import MovieRow from "../components/landing/movie-row";
import Layout from "../components/shared/layout";
import { movieByTime, movies } from "../lib/data";
import { swapList } from "../lib/data";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "@mui/icons-material";
import Filter from "../components/movie-list/filter";
import MovieComponent from "../components/landing/movie";
import { useSessionContext } from "../contexts/SessionContext";
import { handleCancelSwap } from "../lib/helper";

export default function Swap() {
  const { state, dispatch } = useSessionContext();
  const scannedTicket = state.scannedTicket;

  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const handleClose = () => setIsMovieModalOpen(false);

  const movieList = movies.flat();

  const [searchInput, setSearchInput] = useState("");
  const [filteredMovieList, setFilteredMovieList] = useState(movieList);

  useEffect(() => {
    const newMovieList = movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredMovieList(newMovieList);
  }, [searchInput]);

  return (
    <Layout>
      {isMovieModalOpen && (
        <MovieModal
          isMovieModalOpen={isMovieModalOpen}
          handleClose={handleClose}
        />
      )}
      <div className="flex flex-row divide-x overflow-hidden">
        <div className="mx-4 my-auto flex flex-col">
          <p className="text-lg font-semibold truncate">
            {scannedTicket?.title}
          </p>

          <img
            src={scannedTicket?.imagePath}
            style={{ height: "auto", width: 250 }}
            alt={scannedTicket?.title}
          />
          <div className="flex flex-row">
            <p className="text-lg text-gray-600">{scannedTicket?.startTime}</p>
            <p className="text-lg text-gray-600 ml-auto">
              Seat {scannedTicket?.seat}
            </p>
          </div>
          <button
            onClick={() => handleCancelSwap(dispatch)}
            className="bg-red-600 text-white text-base py-2 px-6 rounded-full max-w-full align-middle hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300 ml-auto mt-2"
          >
            <Link href="/">Cancel Swap</Link>
          </button>
        </div>
        <div className="flex flex-col my-2 overflow-y-auto w-3/4">
          <div className="flex flex-row mx-7 mb-2 h-16">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex relative grow"
            >
              <input
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-tl-lg rounded-bl-lg bg-gray-50 mt-2"
                placeholder="Search Movies..."
              />
              {searchInput.length > 0 && (
                <IconButton
                  type="reset"
                  onClick={() => setSearchInput("")}
                  sx={{
                    position: "absolute",
                    right: "4rem",
                    top: "50%",
                    transform: "translate(-10%, -50%)",
                  }}
                >
                  <HighlightOff className="w-5 h-5 bg-red" />
                </IconButton>
              )}
              <button
                type="submit"
                className="w-16 rounded-tr-lg rounded-br-lg bg-blue-500 text-white hover:bg-blue-600 mt-2"
              >
                <Search />
              </button>
            </form>
            <Filter />
          </div>
          <div className="flex flex-wrap space-y-2 pb-16">
            {filteredMovieList.map((movie, index) => {
              return (
                <MovieComponent
                  key={movie.title + index}
                  movie={movie}
                  setIsMovieModalOpen={setIsMovieModalOpen}
                  isMainPage={false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
