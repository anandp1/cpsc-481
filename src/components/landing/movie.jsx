/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import EventSeat from "@mui/icons-material/EventSeat";
import { useState } from "react";
import { useSessionContext } from "../../contexts/SessionContext";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { NotInterestedOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { format } from "date-fns";

const MovieComponent = ({ movie, index, isLastMovie, isMainPage, isInfo }) => {
  const { dispatch } = useSessionContext();
  const router = useRouter();

  const handleMovieClick = () => {
    if (isInfo) return;
    const showingDate = new Date();
    const date = format(showingDate, "EEEE, MMMM do");

    if (isMainPage) {
      router.push(`wizard/ticket`);
      dispatch({
        type: "SELECT_MOVIE",
        payload: { ...movie, date },
      });
    } else {
      router.push(`wizard/showtime`);
      dispatch({
        type: "SELECT_MOVIE",
        payload: { ...movie },
      });
    }
  };

  const movieMargin =
    isLastMovie && index !== 0
      ? "ml-2 sm:ml-4 md:ml-7"
      : "mr-2 sm:mr-4 md:mr-7";
  return (
    <div
      className={classNames(
        `w-[130px] sm:w-[150px] md:w-[180px] lg:w-[220px] inline-block ${
          !isInfo && "cursor-pointer"
        } relative`,
        index === 0 || isLastMovie ? movieMargin : "mx-2 sm:mx-4 md:mx-7 mt-2"
      )}
      onClick={handleMovieClick}
    >
      <span className="flex flex-row">
        <p className="truncate">{movie.title}</p>
        <InformationCircleIcon className="w-6 h-6 text-gray-900 hover:cursor-pointer my-auto ml-auto" />
      </span>
      <img
        className="w-full h-auto block"
        src={movie.imagePath}
        alt={movie.title}
      />
      {isMainPage && (
        <div className="flex flex-row mt-1 relative">
          <div className="flex flex-col grow">
            <p>{movie.startTime}</p>
            <p>{movie.duration}</p>
          </div>
          {movie.capacity === 100 ? (
            <>
              <EventSeat className="w-8 h-8 text-gray-900 absolute right-1 top-1" />
              <NotInterestedOutlined className="w-10 h-10 text-red-600 absolute right-0" />
            </>
          ) : (
            <div className="flex flex-col items-center">
              <EventSeat className="text-gray-900 border border-black rounded-full" />
              <p className="text-center">{movie.capacity}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieComponent;
