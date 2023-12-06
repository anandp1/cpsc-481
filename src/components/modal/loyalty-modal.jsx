import {
  Box,
  Modal,
  IconButton,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import LoyaltyProgress from "../wizard/loyalty-progress";
import { set } from "date-fns";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
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

const LoyaltyPointsModal = ({ isLoyaltyModalOpen, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);
  const [availablePoints, setAvailablePoints] = useState(500); 
  const [pointsToUse, setPointsToUse] = useState("");
  const [showError, setShowError] = useState(false);
  const acceptablePhoneNumber = "1234567890"; // Example phone number
  const { dispatch } = useSessionContext();
  const [pointsError, setPointsError] = useState(""); // New state for points error message

  // Inside your component
useEffect(() => {
  console.log("Available Points: ", availablePoints);
}, [availablePoints]);


  const [page, setPage] = useState(1);

  const handlePhoneSubmit = () => {
    if (phoneNumber === acceptablePhoneNumber) {
      setIsPointsModalOpen(true);
      setShowError(false);
      setPage(page + 1); // Move to the next page only if the phone number is valid
    } else {
      setShowError(true);
    }
  };
  
  

  const handlePointsSubmit = () => {
    const usedPoints = parseInt(pointsToUse, 10);
    if (usedPoints > 0 && usedPoints <= availablePoints) {
      // Use functional update to ensure you're working with the most recent state
      setAvailablePoints(prevPoints => prevPoints - usedPoints);
  
      dispatch({
        type: "SET_USED_POINTS",
        payload: usedPoints,
      });
      setIsPointsModalOpen(false);
      handleClose();
      setPointsError(""); // Reset points error message
    } else {
      setPointsError("Invalid points amount. Please enter a valid number of points.");
      setShowError(true);
    }
  };
  

  const handleCloseSnackbar = () => {
    setShowError(false);
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
     
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {pointsError || "Please enter a valid phone number"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoyaltyPointsModal;
