/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import EventSeat from "@mui/icons-material/EventSeat";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { ChildModal } from "../modal/movie-modal";

const MovieComponent = ({ movie, index, isLastMovie, setIsMovieModalOpen }) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const movieMargin =
    isLastMovie && index !== 0
      ? "ml-2 sm:ml-4 md:ml-7"
      : "mr-2 sm:mr-4 md:mr-7";
  return (
    <div
      onClick={() => setIsMovieModalOpen(true)}
      className={classNames(
        "w-[130px] sm:w-[150px] md:w-[180px] lg:w-[220px] inline-block cursor-pointer relative",
        index === 0 || isLastMovie ? movieMargin : "mx-2 sm:mx-4 md:mx-7 mt-2"
      )}
    >
      {isInfoModalOpen && (
        <ChildModal
          isChildModalOpen={isInfoModalOpen}
          setIsChildModalOpen={setIsInfoModalOpen}
        />
      )}
      <img
        className="w-full h-auto block"
        src={movie.imagePath}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 w-full h-80 hover:bg-neutral-900/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {movie.title}
        </p>
      </div>
      <div className="flex flex-row mt-1">
        <p>{movie.duration}</p>
        <div className="flex flex-row gap-x-2 ml-auto">
          <InformationCircleIcon
            onClick={() => setIsInfoModalOpen(true)}
            className="w-6 h-6 text-gray-900 hover:cursor-pointer my-auto"
          />
          <EventSeat className="w-5 h-5 text-gray-900 border border-black rounded-full my-auto" />
        </div>
      </div>
    </div>
  );
};
export default MovieComponent;
