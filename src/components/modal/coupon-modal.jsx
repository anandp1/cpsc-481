import { Box, Modal, IconButton, Snackbar, Alert } from "@mui/material";
import { Fragment, useState, useEffect } from "react";

import { Close, HighlightOff, Search, QrCodeScanner, Scanner, ArrowForward } from "@mui/icons-material";
import { ReceiptPercentIcon } from "@heroicons/react/24/outline";

import { couponList } from "../../lib/data";

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

const ScanModal = (props) => {
  const {
    isScanModalOpen,
    setIsScanModalOpen,
    setIsSuccessAlertOpen
  } = props;
  const [couponInput, setCouponInput] = useState("");

  const handleClose = () => {
    setIsScanModalOpen(false);
  };

  const handleApplyCoupon = () => {
    setIsSuccessAlertOpen(true);
    handleClose();
  }

  return (
    <Fragment>
      <Modal
        open={isScanModalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 330 }}>
          <div className="bg-white rounded-lg p-4 pb-8 shadow-lg max-h-80 overflow-y-auto">
            <p className="text-xl font-bold text-gray-900">
              Scan Coupon
            </p>
            <IconButton onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
              }}>
              <Close />
            </IconButton>
            <hr className="my-2 border-t border-gray-300" />
            <div className="flex justify-center text-lg my-4 animate-pulse">
              <ReceiptPercentIcon className="w-6" />
              <ArrowForward />
              <Scanner />
              <ArrowForward />
              <QrCodeScanner />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <p>OR Input Code:</p>
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Input Code..."
                />
                {couponInput.length > 0 && (
                  <IconButton type="reset"
                    onClick={() => setCouponInput("")}
                    sx={{
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translate(-10%, -50%)'
                    }}>
                    <HighlightOff className="w-5 h-5 bg-red" />
                  </IconButton>
                )}

              </form>

            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600" onClick={handleApplyCoupon}>
                Apply Code
              </button>
            </div>

          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

const CouponModal = ({ isCouponModalOpen, handleClose }) => {
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [filteredCouponList, setFilteredCouponList] = useState(couponList);

  useEffect(() => {
    const newCouponList = couponList.filter((coupon) => {
      return coupon.name.toLowerCase().includes(searchInput.toLowerCase())
    });
    setFilteredCouponList(newCouponList);
  }, [searchInput]);

  return (
    <div>
      <Modal
        open={isCouponModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >

        <Box sx={style}>
          <div className="flex flex-col bg-white p-4">
            <p className="text-xl font-bold text-gray-900">
              Coupons
            </p>
            <IconButton onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
              }}>
              <Close />
            </IconButton>
            <hr className="my-2 border-t border-gray-300" />

            <form onSubmit={(e) => e.preventDefault()} className="flex relative">
              <input
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-tl-lg rounded-bl-lg bg-gray-50"
                placeholder="Search Coupons..."
              />
              {searchInput.length > 0 && (
                <IconButton type="reset"
                  onClick={() => setSearchInput("")}
                  sx={{
                    position: 'absolute',
                    right: '4rem',
                    top: '50%',
                    transform: 'translate(-10%, -50%)'
                  }}>
                  <HighlightOff className="w-5 h-5 bg-red" />
                </IconButton>
              )}
              <button type="submit" className="w-16 rounded-tr-lg rounded-br-lg bg-blue-500 text-white hover:bg-blue-600">
                <Search />
              </button>
            </form>

            <div className="flex flex-col space-y-2 mt-4 h-96 overflow-scroll">
              {filteredCouponList.map((coupon) => {
                return (
                  <div key={coupon.id} className="flex justify-between items-center bg-gray-100 rounded-lg p-2 shadow-md">
                    <div className="flex items-center space-x-4 px-4">
                      <img
                        src={coupon.imagePath}
                        alt="LOGO"
                        className="block w-16 h-auto"
                      />
                      <p className="text-lg font-bold text-gray-900">
                        {coupon.name}
                      </p>
                    </div>
                    <button className="bg-blue-500 text-white rounded-lg py-4 px-6 shadow-md hover:bg-blue-600" onClick={() => setIsScanModalOpen(true)}>
                      Redeem
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
          {isScanModalOpen && (
            <ScanModal
              isScanModalOpen={isScanModalOpen}
              setIsScanModalOpen={setIsScanModalOpen}
              setIsSuccessAlertOpen={setIsSuccessAlertOpen}
            />
          )}
          <Snackbar open={isSuccessAlertOpen} autoHideDuration={5000} onClose={() => setIsSuccessAlertOpen(false)}>
            <Alert onClose={() => setIsSuccessAlertOpen(false)} severity="success">
              Successfully applied coupon!
            </Alert>
          </Snackbar>
        </Box>
      </Modal>
    </div>
  );
};

export default CouponModal;
