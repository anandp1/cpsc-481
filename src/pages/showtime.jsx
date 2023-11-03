import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import MovieComponent from "../components/landing/movie";
import MovieModal from "../components/modal/movie-modal";
import Layout from "../components/shared/layout";
import ShowtimeCalendar from "../components/showtime/showtime-calendar";
import { movieByTime } from "../lib/data";

export default function Showtime() {
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
        <div className="flex flex-col overflow-y-auto my-auto pb-16">
          <div className="flex flex-row justify-evenly">
            <MovieComponent
              movie={movieByTime["6:00"][0]}
              setIsMovieModalOpen={setIsMovieModalOpen}
            />
            <div className="mt-2 flex flex-row">
              <ChevronLeftIcon className="  m-auto w-10 h-10 cursor-pointer opacity-40 hover:opacity-80 text-gray-900" />
              <ShowtimeCalendar />
              <ChevronRightIcon className=" m-auto w-10 h-10 cursor-pointer opacity-40 hover:opacity-80 text-gray-900" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
