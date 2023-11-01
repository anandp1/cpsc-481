import MovieRow from "../components/landing/movie-row";
import Layout from "../components/shared/layout";
import { movieByTime } from "../lib/data";
import { swapList } from "../lib/data";
import React from "react";
import Link from "next/link";

export default function Swap() {
    return (
        <Layout isLanding={true}>
            <div className="flex flex-col overflow-y-auto my-2">
                <label className="text-2xl text-gray-800 px-10">
                    Current Movie:
                    <div className="flex flex-row overflow-y-auto my-2">
                        <img
                            src={swapList[0].imagePath} style={{height: 'auto', width:250}}
                            alt={swapList[0].title}
                        />
                        <div className="flex flex-col border-l w-full rounded-tl-lg p-4">
                            <br /><br />
                                <div className="flex items-center justify-between py-3 px-10">
                                    <p className="text-2xl text-gray-800">{swapList[0].title}</p>
                                </div>
                                <div className="flex items-center justify-between py-3 px-10">
                                    <p className="text-2xl text-gray-800">{swapList[0].startTime}</p>
                                        <button className="bg-red-600 text-white text-2xl py-3 px-10 rounded-full max-w-full align-middle">
                                            <Link href="/">
                                                Cancel Swap
                                            </Link>
                                        </button>
                                </div>
                                <div className="flex items-center justify-between py-3 px-10">
                                    <p className="text-2xl text-gray-800">Seat {swapList[0].seat}</p>
                                </div>
                            <div className="flex-grow"></div>
                        </div>
                    </div>
                </label>
                <hr className="border-t-2 border-gray-300 my-4" />
                {Object.keys(movieByTime).map((time, index) => {
                    return <MovieRow key={time} rowIndex={index} movieByTimeKey={time} />;
                })}
            </div>
        </Layout>
    );
}
