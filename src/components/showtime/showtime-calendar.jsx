// components/ShowtimeCalendar.js

import React from "react";
import { addDays, format } from "date-fns";
import { EventSeat, NotInterestedOutlined } from "@mui/icons-material";
import classNames from "classnames";
import { useSessionContext } from "../../contexts/SessionContext";
import { useRouter } from "next/router";

const ShowtimeCalendar = () => {
  return (
    <div className="p-2 border border-gray-300 rounded-lg">
      <div className="grid grid-cols-7 gap-1 text-center">
        {generateDatesHTML()}
      </div>
      <hr className="my-2 border-t border-gray-300" />
      {generateTimesHTML()}
    </div>
  );
};

function generateDatesHTML() {
  const startDate = new Date();
  const datesHTML = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(startDate, i);
    const day = format(date, "E");
    const formattedDate = format(date, "d");
    datesHTML.push(
      <div key={i} className="border border-gray-300 p-1 text-sm">
        <div className="font-bold">{day}</div>
        {formattedDate}
      </div>
    );
  }

  return datesHTML;
}

function generateTimesHTML() {
  const { dispatch } = useSessionContext();
  const router = useRouter();

  const handleMovieSelection = (time, columnIndex) => {
    const showingDate = addDays(new Date(), columnIndex); // Calculate the date based on the current date and the column index
    const date = format(showingDate, "EEEE, MMMM do");

    dispatch({
      type: "SELECT_SHOWTIME",
      payload: {
        date,
        startTime: time,
      },
    });

    router.push("/wizard/ticket");
  };

  const times = ["8:00 AM", "9:00 AM", "12:00 PM", "6:00 PM", "11:00 PM"];
  const timeColumns = [];

  for (let i = 0; i < 7; i++) {
    const timesColumn = times.map((time, j) => {
      const capacity = Math.floor(Math.random() * 100) + 1; // Generate random capacity between 1 and 100

      return (
        <button
          key={i * times.length + j}
          className={classNames(
            "border border-gray-300 p-1 text-sm relative",
            capacity === 100
              ? "hover:cursor-not-allowed bg-red-100"
              : "hover:cursor-pointer"
          )}
          disabled={capacity === 100} // Disable the button if the capacity is 100%
          onClick={() => handleMovieSelection(time, i)} // Pass the selected time and column index to the handler
        >
          {time}
          {capacity === 100 ? (
            <>
              <p className="text-center font-bold text-red-600 text-xs">
                {capacity}%
              </p>
              <p className="text-center text-gray-600 text-xs">Booked</p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-center font-bold text-xs">{capacity}%</p>
              <p className="text-center text-gray-600 text-xs">Booked</p>
            </div>
          )}
        </button>
      );
    });

    timeColumns.push(
      <div key={i} className="grid grid-rows-7 gap-5">
        {timesColumn}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-7 gap-1 text-center">{timeColumns}</div>
  );
}

export default ShowtimeCalendar;
