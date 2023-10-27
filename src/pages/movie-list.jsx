import { useState } from "react";
import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Filter from "../components/movie-list/filter";
import Layout from "../components/shared/layout";
import { movieByTime } from "../lib/data";

export default function MovieList() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const handleClose = () => setIsMovieModalOpen(false);

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
          <div className="flex flex-row mx-7 mb-2">
            <form className="w-1/2 mt-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Search Movie..."
                />
              </div>
            </form>
            <Filter />
          </div>
          <div className="flex flex-wrap space-y-2">
            {Object.values(movieByTime)
              .flat()
              .map((movie, index) => {
                return (
                  <MovieComponent
                    key={movie.title + index}
                    movie={movie}
                    setIsMovieModalOpen={setIsMovieModalOpen}
                  />
                );
              })}
          </div>
        </div>
      </Layout>
    </>
  );
}
