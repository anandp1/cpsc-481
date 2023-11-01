import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";

const Navigation = () => {
  return (
    <>
      <nav className="relative flex flex-col sm:px-2 mt-auto w-full justify-evenly bg-gray-300 py-2 z-1500">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <ArrowLeftOnRectangleIcon className="w-6 h-6 text-gray-900" />
            <p className="text-gray-900 text-sm font-bold">Signout</p>
          </div>
          <HomeIcon className="w-6 h-6 text-gray-900" />
          <SubdirectoryArrowLeftIcon className="w-6 h-6 text-gray-900" />
        </div>
      </nav>
    </>
  );
};

export { Navigation };
