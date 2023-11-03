import { useState } from "react";

import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Layout from "../components/shared/layout";
import SeatingChart from "../components/seating/seating_chart";
import { movieByTime } from "../lib/data";
import { format } from "date-fns";

export default function Seating() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const handleClose = () => setIsMovieModalOpen(false);
  const showingDate = new Date();
  const date = format(showingDate, "EEEE, MMMM do")

  return (
    <>
      <Layout>
        {isMovieModalOpen && (
          <MovieModal
            isMovieModalOpen={isMovieModalOpen}
            handleClose={handleClose}
          />
        )}
        <div className="flex flex-col overflow-y-auto my-auto pb-20">
          <div className="flex flex-row justify-evenly grid-row-3">
            <div class="flex flex-col gap-4 items-center self-center">
              <MovieComponent
                movie={movieByTime["6:00PM-6:59PM"][0]}
                setIsMovieModalOpen={setIsMovieModalOpen}
              />
              <div className="flex flex-col gap-2 items-center font-semibold">
                <span>{date}</span>
                <span>
                  {movieByTime["6:00PM-6:59PM"][0].startTime}
                </span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-2xl py-4 rounded-full w-3/4">
                Book
              </button>
            </div>

            <div className="px-4 w-3/4">
              <SeatingChart />
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
}
