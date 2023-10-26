import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import MovieComponent from "./movie";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { movieByTime } from "../../lib/data";

const MovieRow = ({ randomId, movieByTimeKey }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + randomId);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - window.innerWidth + 200;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + randomId);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + window.innerWidth - 200;
    }
  };

  return (
    <>
      <Fade triggerOnce={true}>
        <div className="flex flex-col">
          <div className="flex flex-row my-6 h-full sm:ml-14">
            <h2
              className="text-white col-span-6 sm:text-lg md:text-xl lg:text-2xl font-bold px-2 tracking-wider"
              id="nav-title"
            >
              {movieByTimeKey}
            </h2>
          </div>

          <Fade duration={2000} cascade={true}>
            <div className="flex flex-row sm:mx-14">
              <Fade delay={1000}>
                <div className="group relative hidden sm:block h-full px-6 sm:px-9 my-auto">
                  <ChevronLeftIcon
                    onClick={slideLeft}
                    className="absolute top-0 bottom-0 right-4 sm:right-12 m-auto w-10 h-10 cursor-pointer opacity-10 hover:opacity-80 text-white"
                  />
                </div>
              </Fade>

              <div
                id={"slider" + randomId}
                className="w-full h-full mb-3 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative antialiased tracking-wider"
              >
                {movieByTime[movieByTimeKey].map((movie, index) => {
                  return (
                    <MovieComponent
                      movie={movie}
                      key={movie.id}
                      index={index}
                      isLastMovie={
                        movieByTime[movieByTimeKey].length - 1 === index
                      }
                    />
                  );
                })}
              </div>

              <Fade delay={1000}>
                <div className="group relative hidden sm:block h-full px-9 my-auto">
                  <ChevronRightIcon
                    onClick={slideRight}
                    className="absolute top-0 bottom-0 sm:left-12 m-auto w-10 h-10 cursor-pointer opacity-10 hover:opacity-80 text-white"
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
