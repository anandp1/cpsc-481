import React from "react";
import { addDays, format } from "date-fns";


const SeatingChart = () => {
  return (
    <div>
      {generateChart()}
    </div>
  );
};

function generateChart() {
  const buttons = [];
  const rows = 10;
  const cols = 10;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const label = String.fromCharCode(65 + j) + (i + 1);
      buttons.push({ id: 'button-${label}', label })
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex gap-4 self-end bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md p-4 mb-2 text-sm">
          <p>Legend:</p>
          <span className="bg-green-300 border border-gray-300 py-2 px-4 rounded-tl-lg rounded-tr-lg">Available</span>
          <span className="bg-red-300 border border-gray-300 py-2 px-4 rounded-tl-lg rounded-tr-lg">Unavailable</span>
        </div>
        <div className="bg-blue-100 border text-center p-1 mb-2">Screen</div>

        <div className="grid grid-cols-10 gap-2">
          {buttons.map((button) => (
            <button key={button.id} className="border border-gray-300 bg-green-300 rounded-tl-lg rounded-tr-lg p-5">{button.label}</button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeatingChart;