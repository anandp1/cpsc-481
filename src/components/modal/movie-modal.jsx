import { Box, Modal } from "@mui/material";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "37.5%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ChildModal = ({ isChildModalOpen, setIsChildModalOpen }) => {
  const handleClose = () => {
    setIsChildModalOpen(false);
  };

  return (
    <Fragment>
      <Modal
        open={isChildModalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 330 }}>
          <div className="bg-white rounded-lg p-4 shadow-lg max-h-80 overflow-y-auto">
            <p className="text-2xl font-bold text-gray-900">
              Avengers: Infinity War
            </p>
            <hr className="my-2 border-t border-gray-300" />
            <div className="text-gray-600 text-lg">
              <p>
                <strong>Description:</strong> Iron Man, Thor, the Hulk, and the
                rest of the Avengers unite to battle their most powerful enemy
                yet -- the evil Thanos.
              </p>
              <p>
                <strong>Cast:</strong> Robert, Chris
              </p>
              <p>
                <strong>Genre:</strong> Action/Adventure
              </p>
              <p>
                <strong>Duration:</strong> 2h 29m
              </p>
            </div>
            <hr className="my-2 border-t border-gray-300" />
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

const MovieModal = ({ isMovieModalOpen, handleClose }) => {
  const [isChildModalOpen, setIsChildModalOpen] = useState(false);

  return (
    <div>
      <Modal
        open={isMovieModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div className="flex">
                <p className="text-xl font-bold text-gray-900 truncate w-36">
                  Avengers: Infinity War
                </p>
                <InformationCircleIcon
                  onClick={() => setIsChildModalOpen(true)}
                  className="w-6 h-6 text-gray-900 ml-2 hover:cursor-pointer"
                />
              </div>
              <p className="text-gray-600">6:00 / 1h 30min</p>
            </div>
            <hr className="my-2 border-t border-gray-300" />

            <p className="text-center text-xl font-bold text-gray-900">
              General Admission
            </p>
            <div className="flex flex-row space-x-4 my-2 justify-center">
              <button className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600">
                Child
              </button>
              <button className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600">
                General
              </button>
              <button className="bg-blue-500 text-white rounded-lg p-4 shadow-md hover:bg-blue-600">
                Senior
              </button>
            </div>

            <p className="text-center text-xl font-bold text-gray-900">
              Bundles
            </p>
            <div className="flex flex-row space-x-4 justify-center">
              <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                Monday Deal
              </button>
              <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                Wednesday Deal
              </button>
              <button className="bg-green-500 text-white rounded-lg p-4 shadow-md hover:bg-green-600">
                Thursday Deal
              </button>
            </div>
          </div>
          {isChildModalOpen && (
            <ChildModal
              isChildModalOpen={isChildModalOpen}
              setIsChildModalOpen={setIsChildModalOpen}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MovieModal;
