import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import MovieComponent from "../../components/landing/movie";
import Layout from "../../components/shared/layout";
import ShowtimeCalendar from "../../components/showtime/showtime-calendar";
import { movieByTime } from "../../lib/data";

export default function Showtime() {
  const movie = movieByTime["6:00PM-6:59PM"][0];
  return (
    <>
      <Layout>
        <div className="flex flex-col overflow-y-auto my-auto pb-16">
          <div className="flex flex-row justify-evenly">
            <div class="flex flex-col gap-2">
              <MovieComponent movie={movie} isMainPage={false} />
              <div class="border p-4 rounded-lg bg-gray-100 w-full sm:w-2/3 md:w-3/4 lg:w-4/5 mx-auto h-1/3 overflow-y-auto">
                <strong class="text-xl font-semibold text-gray-700">
                  Description
                </strong>
                <p class="text-gray-600">{movie.description}</p>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-sm text-gray-600">
                    Genre: {movie.genre}
                  </span>
                  <span class="text-sm text-gray-600">
                    Rating: {movie.rating}
                  </span>
                </div>
              </div>
            </div>

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
