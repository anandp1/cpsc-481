import MovieRow from "../components/landing/movie-row";
import Layout from "../components/shared/layout";
import { movieByTime } from "../lib/data";
import { swapList } from "../lib/data";
import React from "react";
import Link from "next/link";

export default function Swap() {
  return (
    <Layout isLanding={true}>
      <div className="flex flex-col overflow-y-auto my-2 pb-16">
        <label className="text-2xl text-gray-800 px-10">
          Current Movie:
          <div className="flex flex-row overflow-y-auto my-2">
            <img
              src={swapList[0].imagePath}
              style={{ height: "auto", width: 250 }}
              alt={swapList[0].title}
            />
            <div className="flex flex-col border-l w-full rounded-tl-lg p-4">
              <div className="flex items-center justify-between py-3 px-4">
                <p className="text-2xl text-gray-800 font-semibold">
                  {swapList[0].title}
                </p>
              </div>
              <div className="flex items-center justify-between py-3 px-4">
                <p className="text-lg text-gray-600">{swapList[0].startTime}</p>
                <button className="bg-red-600 text-white text-lg py-2 px-6 rounded-full max-w-full align-middle hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300">
                  <Link href="/">Cancel Swap</Link>
                </button>
              </div>
              <div className="flex items-center justify-between py-3 px-4">
                <p className="text-lg text-gray-600">Seat {swapList[0].seat}</p>
              </div>
              <div className="flex-grow"></div>
            </div>
          </div>
        </label>
        <hr className="border-t-2 border-gray-300 my-4" />
        {Object.keys(movieByTime).map((time, index) => (
          <MovieRow key={time} rowIndex={index} movieByTimeKey={time} />
        ))}
      </div>
    </Layout>
  );
}
