import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import MovieComponent from "./movie";
import MovieModal from "../modal/movie-modal";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { movieByTime } from "../../lib/data";

const MovieRow = ({ rowIndex, movieByTimeKey, isMainPage }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowIndex);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - window.innerWidth + 200;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowIndex);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + window.innerWidth - 200;
    }
  };

  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const handleClose = () => setIsMovieModalOpen(false);

  const sortedMovieByTime = movieByTime[movieByTimeKey].sort((a, b) => {
    if (a.startTime < b.startTime) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <>
      {isMovieModalOpen && (
        <MovieModal
          isMovieModalOpen={isMovieModalOpen}
          handleClose={handleClose}
        />
      )}
      <Fade triggerOnce={true}>
        <div className="flex flex-col">
          <div className="flex flex-row my-6 h-full sm:ml-14">
            <h2
              className="text-gray-900 col-span-6 sm:text-lg md:text-xl lg:text-2xl font-semibold px-2 tracking-wide"
              id="nav-title"
            >
              {movieByTimeKey}
            </h2>
            {rowIndex === 0 && (
              <div className="ml-auto border border-black mr-12 w-10 hover:cursor-pointer">
                <CalendarDaysIcon className="w-6 h-6 text-gray-900 mt-0.5 mx-auto text-center" />
              </div>
            )}
          </div>

          <Fade duration={2000} cascade={true}>
            <div className="flex flex-row sm:mx-14">
              <Fade delay={1000}>
                <div className="group relative hidden sm:block h-full px-6 sm:px-9 my-auto">
                  <ChevronLeftIcon
                    onClick={slideLeft}
                    className="absolute top-0 bottom-0 right-4 sm:right-12 m-auto w-10 h-10 cursor-pointer opacity-40 hover:opacity-80 text-gray-900"
                  />
                </div>
              </Fade>

              <div
                id={"slider" + rowIndex}
                className="w-full h-full mb-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative antialiased tracking-wider"
              >
                {sortedMovieByTime.map((movie, index) => {
                  return (
                    <MovieComponent
                      setIsMovieModalOpen={setIsMovieModalOpen}
                      movie={movie}
                      key={movie.id}
                      index={index}
                      isLastMovie={
                        movieByTime[movieByTimeKey].length - 1 === index
                      }
                      isMainPage={isMainPage}
                    />
                  );
                })}
              </div>

              <Fade delay={1000}>
                <div className="group relative hidden sm:block h-full px-9 my-auto">
                  <ChevronRightIcon
                    onClick={slideRight}
                    className="absolute top-0 bottom-0 sm:left-12 m-auto w-10 h-10 cursor-pointer opacity-40 hover:opacity-80 text-gray-900"
                  />
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </Fade>
    </>
  );
};

export default MovieRow;
