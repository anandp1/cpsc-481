import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import MovieInformation from "../../components/wizard/movie-information";
import Layout from "../../components/shared/layout";
import ShowtimeCalendar from "../../components/showtime/showtime-calendar";
import { movies } from "../../lib/data";
import { useSessionContext } from "../../contexts/SessionContext";

export default function Showtime() {
  const { state } = useSessionContext();
  const movie = state.selectedMovie;

  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto my-auto pb-16">
          <div className="flex flex-row justify-evenly">
            <MovieInformation movie={movie} isMainPage={false} />

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
