import React from "react";
import {
  EventSeat,
  CircleOutlined,
  Clear,
  Accessible,
} from "@mui/icons-material";

const Seat = ({
  type,
  selectedSeats,
  setSelectedSeats,
  rowIndex,
  seatIndex,
  limit,
  isLegend,
}) => {
  let isSelected;
  let handleClick;
  if (!isLegend) {
    isSelected = selectedSeats.includes(`${rowIndex}-${seatIndex}`);
    handleClick = () => {
      if (isSelected) {
        setSelectedSeats(
          selectedSeats.filter((seat) => seat !== `${rowIndex}-${seatIndex}`)
        );
      } else {
        if (limit && selectedSeats.length >= limit) {
          const updatedSeats = selectedSeats.slice(1); // Pull the first item from the array
          setSelectedSeats([...updatedSeats, `${rowIndex}-${seatIndex}`]);
        } else {
          setSelectedSeats([...selectedSeats, `${rowIndex}-${seatIndex}`]);
        }
      }
    };
  } else {
    isSelected = false;
    handleClick = () => {};
  }

  switch (type) {
    case "A":
      return (
        <div
          className={`relative ${!isLegend ? "hover:cursor-pointer" : ""}`}
          onClick={handleClick}
        >
          <EventSeat className="w-12 h-12" />
          {isSelected && (
            <CircleOutlined className="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" />
          )}
          {!isLegend && (
            <span className="text-sm absolute top-0 left-1/2 -translate-x-1/2 translate-y-2 text-white select-none">
              {seatIndex + 1}
            </span>
          )}
        </div>
      );
    case "U":
      return (
        <div className="relative">
          <EventSeat className="w-12 h-12 text-red-500" />
          <Clear className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100" />
        </div>
      );
    case "H":
      return (
        <div
          className={`relative bg-gray-400 rounded-lg ${
            !isLegend ? "hover:cursor-pointer" : ""
          } ${isSelected ? "outline outline-4 outline-blue-500" : ""}`}
          onClick={handleClick}
        >
          <EventSeat className="w-12 h-12" />
          <Accessible className="absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100" />
        </div>
      );
    default:
      return (
        <div
          className={`relative ${!isLegend ? "hover:cursor-pointer" : ""}`}
          onClick={handleClick}
        >
          <EventSeat className="w-12 h-12" />
          {isSelected && (
            <CircleOutlined className="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" />
          )}
        </div>
      );
  }
};

export default Seat;
