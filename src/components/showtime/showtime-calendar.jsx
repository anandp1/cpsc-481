// components/ShowtimeCalendar.js

import React from "react";
import { addDays, format } from "date-fns";

function generateDatesHTML() {
  const startDate = new Date();
  const datesHTML = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(startDate, i);
    const day = format(date, "d");
    datesHTML.push(
      <div key={i} className="border border-gray-300 p-2">
        {day}
      </div>
    );
  }

  return datesHTML;
}

function generateTimesHTML() {
  const times = [
    "8:00 AM",
    "9:00 AM",
    "12:00 PM",
    "3:30 PM",
    "6:00 PM",
    "8:30 PM",
    "11:00 PM",
  ];
  const timesHTML = [];

  for (let i = 0; i < times.length; i++) {
    timesHTML.push(
      <div key={i} className="grid grid-cols-7 gap-2">
        {times.map((time, j) => (
          <div key={j} className="border border-gray-300 p-2">
            {time}
          </div>
        ))}
      </div>
    );
  }

  return timesHTML;
}

const ShowtimeCalendar = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="font-bold">S</div>
        <div className="font-bold">M</div>
        <div className="font-bold">T</div>
        <div className="font-bold">W</div>
        <div className="font-bold">T</div>
        <div className="font-bold">F</div>
        <div className="font-bold">S</div>
        {generateDatesHTML()}
      </div>
      <hr className="my-2 border-t border-gray-300" />
      {generateTimesHTML()}
    </div>
  );
};

export default ShowtimeCalendar;
