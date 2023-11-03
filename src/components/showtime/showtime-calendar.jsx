// components/ShowtimeCalendar.js

import React from "react";
import { addDays, format } from "date-fns";

const ShowtimeCalendar = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="grid grid-cols-7 gap-2 text-center">
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
      <div key={i} className="border border-gray-300 p-2">
        <div className="font-bold">{day}</div>
        {formattedDate}
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
  const timeColumns = [];

  for (let i = 0; i < 7; i++) {
    const timesColumn = times.map((time,j) => (
      <div key={i} className="border border-gray-300 p-2">
        {time}
      </div>
    ));
  

    timeColumns.push(
      <div key={i} className="grid grid-rows-7 gap-1">
        {timesColumn}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-7 gap-2" style={{width: "1000px", height: "650px"}}>
      {timeColumns}
    </div>
  );
}
export default ShowtimeCalendar;
