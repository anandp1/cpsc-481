import React from "react";

function ButtonGrid() {
    const buttons = [
        {id: 1, label: 'A1'},

    ];

    return (
        <div className="button-grid">
            {buttons.map((button) => (
                <button key={button.id}>{button.label}</button>
            ))}
        </div>
    );
}

export default ButtonGrid;