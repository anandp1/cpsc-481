import {
  Box,
  Modal,
  IconButton,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import LoyaltyProgress from "../wizard/loyalty-progress";
import { set } from "date-fns";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

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

const LoyaltyPointsModal = ({ isLoyaltyModalOpen, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);
  const [availablePoints, setAvailablePoints] = useState(0); // This should be fetched from an API based on the phone number
  const [pointsToUse, setPointsToUse] = useState("");

  const [page, setPage] = useState(1);

  const handlePhoneSubmit = () => {
    // Here you would typically fetch the available points from your backend
    // For this example, we'll just set it to a fixed value
    setAvailablePoints(500); // Assume 500 points available
    setIsPointsModalOpen(true);
  };

  const handlePointsSubmit = () => {
    // Here you would handle the logic to use the points
    // For example, sending the data to your backend
    console.log(`Using ${pointsToUse} points for phone number ${phoneNumber}`);
    // Close the modal after submission
    setIsPointsModalOpen(false);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={isLoyaltyModalOpen}
        onClose={handleClose}
        aria-labelledby="loyalty-modal-title"
        aria-describedby="loyalty-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col bg-white p-4">
            {page === 1 && (
              <p className="text-xl font-bold text-gray-900">Loyalty</p>
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
                top: 4,
              }}
            >
              <Close />
            </IconButton>
            <hr className="my-2 border-t border-gray-300" />
            <div className="mx-20">
              {page === 1 && <LoyaltyProgress section="Enter Number" />}
              {page === 2 && <LoyaltyProgress section="Loyalty Points" />}
            </div>
            {page === 1 && (
              <>
                <p className="text-xl font-bold text-gray-900">
                  Enter Member's Phone Number
                </p>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  margin="normal"
                  type="tel"
                />
                <div
                  className="flex justify-end"
                  style={{ paddingTop: "10px" }}
                >
                  <button
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600"
                    onClick={() => {
                      handlePhoneSubmit();
                      setPage(page + 1);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            {page === 2 && (
              <>
                <p className="text-xl font-bold text-gray-900">
                  Available Points: {availablePoints}
                </p>
                <TextField
                  fullWidth
                  label="Points to Use"
                  type="number"
                  value={pointsToUse}
                  onChange={(e) => setPointsToUse(e.target.value)}
                  margin="normal"
                  inputProps={{ min: 0, max: availablePoints }}
                />
                <div
                  className="flex justify-end"
                  style={{ paddingTop: "10px" }}
                >
                  <button
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600"
                    onClick={handlePointsSubmit}
                  >
                    Submit
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

export default LoyaltyPointsModal;
