import { Box, IconButton, Modal } from "@mui/material";
import { scannedList } from "../../lib/data";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  CreditCardIcon as DebitCardIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline"
import { ArrowsRightLeftIcon, ReceiptRefundIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/router';
import { useSessionContext } from "../../contexts/SessionContext";


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

export const RefundModal = ({ isRefundModalOpen, setIsRefundModalOpen }) => {
  const router = useRouter();
  const handleClose = () => {
    setIsRefundModalOpen(false);
  };

  const handleRefund = () => {
    // Close the modal
    setIsRefundModalOpen(false);
    // Redirect to the RefundSuccess page
    router.push('/RefundSuccess');
  };


  return (
    <div>
      <Modal
        open={isRefundModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col bg-white rounded-lg p-4 pb-10 shadow-lg gap-2">
          <div className="flex flex-row justify-center">
              <div className="flex">
                <p className="text-xl font-bold text-gray-900">
                  Refund
                </p>
                <IconButton onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 4,
                    top: 4,
                  }}>
                  <Close />
                </IconButton>
              </div>
            </div>
            <IconButton onClick={handleClose}
              sx={{
                position: "absolute",
                right: 4,
                top: 4,
              }}
            >
              <Close />
            </IconButton>
            <hr className="my-2 border-t border-gray-300" />
            <br />
            <p className="text-center text-xl font-bold text-gray-900">
              Selected Tickets:
            </p>
            <p className="text-center text-xl text-gray-900 hover:bg-gray-300">
              {scannedList[0].name} | {scannedList[0].startTime}{" "}
              {scannedList[0].title} - Seat {scannedList[0].seat}
            </p>
            <p className="text-center text-xl text-gray-900 hover:bg-gray-300">
              {scannedList[1].name} | {scannedList[1].startTime}{" "}
              {scannedList[1].title} - Seat {scannedList[1].seat}
            </p>
            <br />
            <p className="text-center text-xl font-bold text-gray-900">
              Refund Options:
            </p>
            <div className="flex flex-row space-x-4 justify-center">
              <button onClick={handleRefund} className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center">
                <BanknotesIcon className="w-6 h-6 mr-2" />Cash
              </button>
              <button onClick={handleRefund} className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center">
                <DebitCardIcon className="w-6 h-6 mr-2" />Debit
              </button>
              <button onClick={handleRefund} className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600 flex place-content-center place-items-center">
                <CreditCardIcon className="w-6 h-6 mr-2" />Credit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
   </div>
  );
};
const ScannedTicketModal = ({ isScannedTicketModalOpen, handleClose }) => {
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const { dispatch } = useSessionContext();

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
            <div className="flex flex-row justify-center">
              <div className="flex">
                <p className="text-xl font-bold text-gray-900">
                  Ticket(s) Scanned!
                </p>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 4,
                    top: 4,
                  }}
                >
                  <Close />
                </IconButton>
              </div>
            </div>
            <hr className="my-2 border-t border-gray-300" />
            <br />
            <div className="flex flex-col justify-center items-center">
              {scannedList.map((item, index) => (
                <button
                  key={index}
                  className={`text-center text-xl text-gray-900 ${
                    clickedIndex === index ? "bg-gray-300" : "hover:bg-gray-300"
                  } my-2`}
                  onClick={() => handleButtonClick(index)}
                >
                  {item.name} | {item.startTime} {item.title} - Seat {item.seat}
                </button>
              ))}
            </div>
            <br />
            <div className="flex flex-row space-x-4 justify-center">
              <button
                className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600 flex place-content-center place-items-center"
                onClick={() => setIsRefundModalOpen(true)}
              >
                <ReceiptRefundIcon className="w-6 h-6 mr-2" /> Refund
              </button>
              <Link href="/swap">
                <button
                  className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600 flex place-content-center place-items-center"
                  onClick={() => {
                    handleSwapClick();
                    handleClose();
                  }}
                >
                  <ArrowsRightLeftIcon className="w-6 h-6 mr-2" /> Swap
                </button>
              </Link>
            </div>
          </div>
          {isRefundModalOpen && (
            <RefundModal
              isRefundModalOpen={isRefundModalOpen}
              setIsRefundModalOpen={setIsRefundModalOpen}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ScannedTicketModal;
