import { useState } from "react";

import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Layout from "../components/shared/layout";
import SeatingChart from "../components/seating/seating_chart";
import { movieByTime } from "../lib/data";

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
          <div className="flex flex-row justify-evenly">
            <MovieComponent
              movie={movieByTime["6:00PM-6:59PM"][0]}
              setIsMovieModalOpen={setIsMovieModalOpen}
            />
            <div className="mt-2 flex flex-row">
              <SeatingChart />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
