import React, { useState } from "react";
import Seat from "./seat";

const SeatingChart = () => {
  const rows = [
    ["A", "A", null, "A", "U", "A", "A", "U", "A", "A"],
    ["A", "A", null, "A", "U", "U", "U", "A", "A"],
    ["A", "U", null, "H", "H", null, "A", "A", "H", "H"],
    ["U", "U", null, "A", "A", "U", "U", "A", "A"],
    ["A", "U", null, "A", "A", "U", "U", "U", "A", "A"],
    ["A", "A", null, "A", "A", "U", "U", "U", "A"],
    ["A", "U", null, "A", "U", "U", "U", "U", "U", "A"],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="bg-gray-800 text-white text-center p-1 mb-2 rounded-full">
            Screen
          </div>
          {rows.map((row, rowIndex) => (
            <div
              className={`flex gap-2 items-center ${
                rowIndex === 1 ? "mb-12" : ""
              }`}
              key={rowIndex}
            >
              <span className="text-gray-800 text-xl font-bold pr-8">
                {String.fromCharCode(65 + rowIndex)}
              </span>
              {row.map((seatType, seatIndex) =>
                seatType ? (
                  <Seat
                    key={`${rowIndex}${seatIndex}`}
                    type={seatType}
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                    rowIndex={rowIndex}
                    seatIndex={seatIndex}
                  />
                ) : (
                  <div
                    className={`w-12 h-12 ${rowIndex % 2 !== 0 ? "mr-7" : ""}`}
                  />
                )
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4 self-start bg-gray-100 border-2 border-gray-200 rounded-lg shadow-sm p-4 mb-2 text-sm">
          <h2 className="text-lg font-semibold">Legend:</h2>
          <div className="flex flex-col items-center">
            <Seat type="A" isLegend />
            <span className="text-xs">Available</span>
          </div>
          <div className="flex flex-col items-center">
            <Seat type="U" isLegend />
            <span className="text-xs">Unavailable</span>
          </div>

          <div className="flex flex-col items-center">
            <Seat type="H" isLegend />
            <span className="text-xs">Accessible</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-1/5 bg-gray-100 border border-gray-300/80 text-black rounded-lg py-4 px-6 shadow-md hover:bg-gray-200"
          onClick={() => {}}
        >
          Previous
        </button>
        <button
          className="w-1/3 bg-green-500 text-white rounded-lg py-4 px-6 shadow-md hover:bg-green-600"
          onClick={() => {}}
        >
          Confirm Seating
        </button>
      </div>
    </div>
  );
};

export default SeatingChart;
