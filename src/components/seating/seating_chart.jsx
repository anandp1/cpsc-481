import React from "react";
import { addDays, format } from "date-fns";


const SeatingChart = () => {
    return (
        <div>
            <hr className="my-2 border-t border-gray-300" />
            {generateChart()}
        </div>
    );
};

function generateChart() {
    const buttons = [];
    const rows = 10;
    const cols = 10;

    for(let j = 0; j < rows; j++) {
        for(let i = 0; i < cols; i++) {
            const label = String.fromCharCode(65 + j) + (i + 1);
            buttons.push({id: 'button-${label}', label})
        }
    }

    return (
        <div className="grid grid-cols-10 gap-2">
            {buttons.map((button) => (
                <button key={button.id} className="border border-gray-300 p-2">{button.label}</button>
            ))}
        </div>
    );
}

export default SeatingChart;