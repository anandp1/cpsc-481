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
      <span className="flex flex-row">
        <p className="truncate">{movie.title}</p>
        <InformationCircleIcon
          onClick={() => setIsInfoModalOpen(true)}
          className="w-6 h-6 text-gray-900 hover:cursor-pointer my-auto ml-auto"
        />
      </span>
      <img
        className="w-full h-auto block"
        src={movie.imagePath}
        alt={movie.title}
      />
      <div className="flex flex-row mt-1">
        <span className="flex flex-col">
          <p>{movie.startTime}</p>
          <p>{movie.duration}</p>
        </span>
        <EventSeat className="w-5 h-5 text-gray-900 border border-black rounded-full ml-auto" />
      </div>
    </div>
  );
};
export default MovieComponent;
