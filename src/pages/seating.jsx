import { useState } from "react";

import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Layout from "../components/shared/layout";
import SeatingChart from "../components/seating/seating_chart";
import { movieByTime } from "../lib/data";
import { relative } from "path";

export default function Seating() {
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
        <div className="flex flex-col overflow-y-auto my-auto">
          <div className="flex flex-row justify-evenly grid-row- 2">
            <MovieComponent
              movie={movieByTime["6:00PM-6:59PM"][0]}
              setIsMovieModalOpen={setIsMovieModalOpen}
            />
            <button className="bg-blue-500 text-white-2x1 py-3 ">
                Book
            </button>

              
              <div className="mt-2 flex flex-row">
                <SeatingChart/>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
