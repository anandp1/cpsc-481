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

const style = {
  position: "absolute",
  top: "50%",
  left: "37.5%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoyaltyPointsModal = ({ isLoyaltyModalOpen, handleClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);
  const [availablePoints, setAvailablePoints] = useState(0); // This should be fetched from an API based on the phone number
  const [pointsToUse, setPointsToUse] = useState("");

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
          <div className="flex flex-col bg-white">
            <p className="text-xl font-bold text-gray-900">
              Enter Member's Phone Number
            </p>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
            <TextField
              fullWidth
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              margin="normal"
              type="tel"
            />
            <div className="flex justify-end" style={{ paddingTop: "10px" }}>
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600"
                onClick={handlePhoneSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={isPointsModalOpen}
        onClose={() => setIsPointsModalOpen(false)}
        aria-labelledby="points-modal-title"
        aria-describedby="points-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col bg-white">
            <IconButton
              onClick={() => setIsPointsModalOpen(false)}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
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

            <div className="flex justify-end" style={{ paddingTop: "10px" }}>
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600"
                onClick={handlePointsSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoyaltyPointsModal;
