import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Filter from "../components/movie-list/filter";
import Layout from "../components/shared/layout";
import { movies } from "../lib/data";
import { Search, HighlightOff } from "@mui/icons-material";

export default function MovieList() {
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
    <>
      <Layout>
        {isMovieModalOpen && (
          <MovieModal
            isMovieModalOpen={isMovieModalOpen}
            handleClose={handleClose}
          />
        )}

        <div className="flex flex-col my-2 overflow-y-auto">
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
      </Layout>
    </>
  );
}
