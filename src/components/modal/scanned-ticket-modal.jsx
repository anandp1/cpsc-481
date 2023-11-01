import {Box, IconButton, Modal} from "@mui/material";
import { scannedList } from "../../lib/data";
import Link from "next/link";
import React, {Fragment, useState} from "react";
import {Close} from "@mui/icons-material";


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
    const handleClose = () => {
        setIsRefundModalOpen(false);
    };

    return (
        <Fragment>
            <Modal
                open={isRefundModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex flex-col bg-white rounded-lg p-4 shadow-lg">
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
                        <hr className="my-2 border-t border-gray-300" />
                        <br />
                        <p className="text-center text-xl font-bold text-gray-900">
                            Selected Tickets:
                        </p>
                        <p className="text-center text-xl text-gray-900 hover:bg-gray-300">
                            {scannedList[0].name} | {scannedList[0].startTime} {scannedList[0].title} - Seat {scannedList[0].seat}
                        </p>
                        <p className="text-center text-xl text-gray-900 hover:bg-gray-300">
                            {scannedList[1].name} | {scannedList[1].startTime} {scannedList[1].title} - Seat {scannedList[1].seat}
                        </p>
                        <br />
                        <p className="text-center text-xl font-bold text-gray-900">
                            Refund Options:
                        </p>
                        <div className="flex flex-row space-x-4 justify-center">
                            <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                                Cash
                            </button>
                            <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                                Debit
                            </button>
                            <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                                Credit
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </Fragment>
    );
};
const ScannedTicketModal = ({ isScannedTicketModalOpen, handleClose}) => {
    const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);

    return (
        <div>
            <Modal
                open={isScannedTicketModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex flex-col bg-white rounded-lg p-4 shadow-lg">
                        <div className="flex flex-row justify-center">
                            <div className="flex">
                                <p className="text-xl font-bold text-gray-900">
                                    Ticket(s) Scanned!
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
                        <hr className="my-2 border-t border-gray-300" />
                        <br />
                        <button className="text-center text-xl text-gray-900 hover:bg-gray-300">
                            {scannedList[0].name} | {scannedList[0].startTime} {scannedList[0].title} - Seat {scannedList[0].seat}
                        </button>
                        <button className="text-center text-xl text-gray-900 hover:bg-gray-300">
                            {scannedList[1].name} | {scannedList[1].startTime} {scannedList[1].title} - Seat {scannedList[1].seat}
                        </button>
                        <br />
                        <div className="flex flex-row space-x-4 justify-center">
                            <button className="bg-orange-500 text-white rounded-lg p-4 shadow-md hover:bg-orange-600"
                                    onClick={() => setIsRefundModalOpen(true)} >
                                Refund
                            </button>
                            <Link href="/swap">
                                <button className="bg-orange-500 text-white rounded-lg p-4 shadow-md hover:bg-orange-600" onClick={handleClose}>
                                    Swap
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
