import React, { useState, useEffect } from "react";
import Seat from "./seat";
import { useSessionContext } from "../../../contexts/SessionContext";
import { useRouter } from "next/router";
import { handleCancelSwap } from "../../../lib/helper";

const SeatingChart = () => {
  const { state, dispatch } = useSessionContext();
  const movie = state.selectedMovie;
  const tickets = state.selectedTickets;
  const scannedTicket = state.scannedTicket;

  const router = useRouter();
  useEffect(() => {
    if (!tickets) {
      router.replace("/wizard/ticket");
    } else {
      let ticketCount = tickets.child + tickets.general + tickets.senior;
      if (ticketCount === 0) {
        router.replace("/wizard/ticket");
      }
    }
  }, []);

  if (!tickets) {
    return <div>Loading...</div>;
  }

  const ticketCount = tickets.child + tickets.general + tickets.senior;

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

  const handleConfirm = () => {
    const seats = selectedSeats.map((seat) => {
      seat = seat.split("-");
      const rowNumber = parseInt(seat[0]) + 65;
      const seatNumber = parseInt(seat[1]);
      return `${String.fromCharCode(rowNumber)}${seatNumber}`;
    });
    dispatch({
      type: "SELECT_SEATS",
      payload: seats,
    });
    const newCartItems = [];
    let i = 0,
      j = 0,
      k = 0;
    let swapFlag = true;
    seats.forEach((seat, index) => {
      console.log(seat);

      const isChildSwap =
        scannedTicket?.admissionType === "Child" && swapFlag ? true : false;
      const isGeneralSwap =
        scannedTicket?.admissionType === "General" && swapFlag ? true : false;
      const isSeniorSwap =
        scannedTicket?.admissionType === "Senior" && swapFlag ? true : false;
      if (isChildSwap || isGeneralSwap || isSeniorSwap) {
        handleCancelSwap(dispatch);
        swapFlag = false;
      }

      const { child, general, senior, bundle } = tickets;
      if (i < child) {
        newCartItems.push({
          id: index,
          itemName: "Child Ticket",
          price: isChildSwap ? 0 : bundle ? 9.75 + 5 : 9.75,
          seatNumber: seat,
          movie,
          bundle,
          isSwap: isChildSwap,
        });
        i++;
        return;
      }
      if (j < general) {
        newCartItems.push({
          id: index,
          itemName: "General Ticket",
          price: isGeneralSwap ? 0 : bundle ? 14.75 + 5 : 14.75,
          seatNumber: seat,
          movie,
          bundle,
          isSwap: isGeneralSwap,
        });
        j++;
        return;
      }
      if (k < senior) {
        newCartItems.push({
          id: index,
          itemName: "Senior Ticket",
          price: isSeniorSwap ? 0 : bundle ? 10.75 + 5 : 10.75,
          seatNumber: seat,
          movie,
          bundle,
          isSwap: isSeniorSwap,
        });
        k++;
        return;
      }
    });
    dispatch({
      type: "CART_SET_ITEMS",
      payload: [...state.cart, ...newCartItems],
    });
    router.replace("/");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="-mb-4 flex justify-between items-end">
        <div className="flex gap-4 items-end">
          <h2>Selected Tickets:</h2>
          <div className="flex flex-col items-end">
            <span className="text-sm">
              Child: <span className="font-bold">{tickets.child}</span>
            </span>
            <span className="text-sm">
              General: <span className="font-bold">{tickets.general}</span>
            </span>
            <span className="text-sm">
              Senior: <span className="font-bold">{tickets.senior}</span>
            </span>
          </div>
        </div>
        <div className="pr-36">
          Seats to select: <span className="font-bold">{ticketCount}</span>
        </div>
      </div>
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
                    limit={ticketCount}
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
        <div className="flex flex-col gap-4 self-start bg-gray-100 border-2 border-gray-200 rounded-lg shadow-sm p-4 mb-2 text-sm">
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
          className="ml-auto w-1/3 bg-green-500 text-white rounded-lg py-4 px-6 shadow-md hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-black"
          onClick={handleConfirm}
          disabled={selectedSeats.length !== ticketCount}
        >
          Confirm Seating
        </button>
      </div>
    </div>
  );
};

export default SeatingChart;
