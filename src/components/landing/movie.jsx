/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";

const MovieComponent = ({ movie, index, isLastMovie }) => {
  const movieMargin =
    isLastMovie && index !== 0
      ? "ml-2 sm:ml-4 md:ml-7"
      : "mr-2 sm:mr-4 md:mr-7";
  return (
    <div
      key={movie.id}
      className={classNames(
        "w-[130px] sm:w-[150px] md:w-[180px] lg:w-[220px] inline-block cursor-pointer relative",
        index === 0 || isLastMovie ? movieMargin : "mx-2 sm:mx-4 md:mx-7"
      )}
    >
      <img
        className="w-full h-auto block"
        src={movie.imagePath}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-neutral-900/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center ">
          {movie.title}
        </p>
      </div>
    </div>
  );
};
export default MovieComponent;
