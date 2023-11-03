import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftOnRectangleIcon, Bars4Icon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import ScannedTicketModal from "../modal/scanned-ticket-modal";

const Navigation = () => {
  const [isScannedTicketModalOpen, setIsScannedTicketModalOpen] = useState(false);
  const handleClose = () => setIsScannedTicketModalOpen(false);

  return (
    <>
      {isScannedTicketModalOpen && (
        <ScannedTicketModal
          isScannedTicketModalOpen={isScannedTicketModalOpen}
          handleClose={handleClose}
        />
      )}
      <div className="absolute bottom-0 left-0 z-1500">
        <div className="flex bg-gray-100 border border-gray-400/80 shadow-md rounded-tr-lg p-4 w-40 h-14">
          <div className="flex flex-row items-center">
            <ArrowLeftOnRectangleIcon className="w-6 h-6 text-gray-900" />
            <p className="text-gray-900 font-bold">Signout</p>
          </div>
          <Bars4Icon
            onClick={() => setIsScannedTicketModalOpen(true)}
            className="w-6 h-6 text-gray-900 ml-2 hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-1500">
        <Link href="/" draggable={false} >
          <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-md border-4 border-white p-3 mb-2 hover:cursor-pointer">
            <HomeIcon className="w-8 h-8 text-white" />
          </div>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-1500">
        <div className="flex items-center justify-center bg-gray-100 border border-gray-400/80 shadow-md rounded-tl-lg p-4 w-40 h-14 hover:bg-gray-200 hover:cursor-pointer">
          <SubdirectoryArrowLeftIcon className="w-8 h-8 text-gray-900" />
        </div>
      </div>
    </>
  );
};

export { Navigation };
