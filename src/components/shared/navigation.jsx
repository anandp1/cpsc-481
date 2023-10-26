import React from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";

const Navigation = () => {
  return (
    <>
      <nav className="relative flex flex-col sm:px-2 sm:my-8 w-full justify-evenly">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <ArrowLeftOnRectangleIcon className="w-6 h-6 text-white" />
            <p className="text-white text-sm font-bold">Signout</p>
          </div>
          <HomeIcon className="w-6 h-6 text-white" />
          <SubdirectoryArrowLeftIcon className="w-6 h-6 text-white" />
        </div>
      </nav>
    </>
  );
};

export { Navigation };
