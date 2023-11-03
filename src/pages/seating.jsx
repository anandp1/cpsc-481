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
  const day = format(showingDate, "E");
  const date = format(showingDate, "d")

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
          <div className="flex flex-row justify-evenly grid-row-3">
            <div class="flex flex-col gap-10">
                <MovieComponent
                movie={movieByTime["6:00PM-6:59PM"][0]}
                setIsMovieModalOpen={setIsMovieModalOpen}
                />
                <label className="align-middle">{movieByTime["6:00PM-6:59PM"][0].startTime} {day} {date}</label>
                <button className="bg-blue-500 text-white-2x1 py-5 rounded-full">
                    Book
                </button>

                <div className="flex flex-col-3 gap-5">
                    <button className="text-white">......</button>
                    <button className="bg-green-300 border border-gray-500">available</button>
                    <button className="bg-red-300 border border-gray-500">unavailable</button>
                </div>
            </div>
              
            <div className="flex flex-col">
                <button className="bg-blue-100 border">screen </button>
                <SeatingChart/>
            </div>

            </div>
        </div>
      </Layout>
    </>
  );
}
