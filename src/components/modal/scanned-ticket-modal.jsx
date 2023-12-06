import { Box, IconButton, Modal } from "@mui/material";
import { scannedList } from "../../lib/data";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  CreditCardIcon as DebitCardIcon,
  BanknotesIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowsRightLeftIcon,
  ReceiptRefundIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useSessionContext } from "../../contexts/SessionContext";
import classNames from "classnames";

const style = {
  position: "absolute",
  top: "50%",
  left: "37.5%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const ScannedTicketModal = ({ isScannedTicketModalOpen, handleClose }) => {
  const { dispatch } = useSessionContext();
  const [page, setPage] = useState(1);
  const router = useRouter();
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleButtonClick = (index) => {
    setClickedIndex(index);
  };

  const handleSwapClick = () => {
    dispatch({
      type: "SWAP_TICKET",
      payload: { ...scannedList[clickedIndex] },
    });
  };

  const handleRefund = () => {
    // Redirect to the RefundSuccess page
    router.push("/RefundSuccess");
  };

  return (
    <div>
      <Modal
        open={isScannedTicketModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col bg-white rounded-lg p-4 pb-10 shadow-lg gap-2">
            <div className="flex flex-col bg-white">
              {page === 1 && (
                <p className="text-xl font-bold text-gray-900">
                  Ticket(s) Scanned
                </p>
              )}
              {page === 2 && (
                <div className="flex flex-row gap-x-3">
                  <ChevronLeftIcon
                    className="w-5 hover:cursor-pointer"
                    onClick={() => setPage(page - 1)}
                  />
                  <p className="text-xl font-bold text-gray-900">Back</p>
                </div>
              )}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 4,
                  top: 10,
                }}
              >
                <Close />
              </IconButton>
            </div>
            <hr className="my-2 border-t border-gray-300" />
            <br />
            {page === 1 && (
              <>
                <div className="flex flex-col justify-center items-center">
                  {scannedList.map((item, index) => (
                    <button
                      key={index}
                      className={`text-center text-xl text-gray-900 ${
                        clickedIndex === index
                          ? "bg-gray-300"
                          : "hover:bg-gray-300"
                      } my-2`}
                      onClick={() => handleButtonClick(index)}
                    >
                      {item.name} | {item.startTime} {item.title} - Seat{" "}
                      {item.seat}
                    </button>
                  ))}
                </div>
                <br />
                <div className="flex flex-row space-x-4 justify-center">
                  <button
                    disabled={clickedIndex === null}
                    className={classNames(
                      "bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600 flex place-content-center place-items-center",
                      clickedIndex === null && "cursor-not-allowed"
                    )}
                    onClick={() => setPage(page + 1)}
                  >
                    <ReceiptRefundIcon className="w-6 h-6 mr-2" /> Refund
                  </button>
                  <Link href="/swap">
                    <button
                      disabled={clickedIndex === null}
                      className={classNames(
                        "bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600 flex place-content-center place-items-center",
                        clickedIndex === null && "cursor-not-allowed"
                      )}
                      onClick={() => {
                        handleSwapClick();
                        handleClose();
                      }}
                    >
                      <ArrowsRightLeftIcon className="w-6 h-6 mr-2" /> Swap
                    </button>
                  </Link>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <p className="text-center text-xl font-bold text-gray-900">
                  Selected Tickets:
                </p>
                <p className="text-center text-xl text-gray-900 hover:bg-gray-300">
                  {scannedList[clickedIndex].name} |
                  {scannedList[clickedIndex].startTime}
                  {scannedList[clickedIndex].title} - Seat
                  {scannedList[clickedIndex].seat}
                </p>
                <br />
                <p className="text-center text-xl font-bold text-gray-900">
                  Refund Options:
                </p>
                <div className="flex flex-row space-x-4 justify-center">
                  <button
                    onClick={handleRefund}
                    className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center"
                  >
                    <BanknotesIcon className="w-6 h-6 mr-2" />
                    Cash
                  </button>
                  <button
                    onClick={handleRefund}
                    className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center"
                  >
                    <DebitCardIcon className="w-6 h-6 mr-2" />
                    Debit
                  </button>
                  <button
                    onClick={handleRefund}
                    className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center"
                  >
                    <CreditCardIcon className="w-6 h-6 mr-2" />
                    Credit
                  </button>
                </div>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ScannedTicketModal;
